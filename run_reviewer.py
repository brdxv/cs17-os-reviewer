#!/usr/bin/env python3
"""Tiny local-only web server for the CS17 OS Reviewer."""
from __future__ import annotations

import http.server
import json
import os
import socketserver
import threading
import time
import webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8765  # Keep this fixed so browser localStorage stays on the same origin.
SNAPSHOT_FILE = os.path.join(ROOT, "local-progress-snapshot.json")
SNAPSHOT_TMP = os.path.join(ROOT, "local-progress-snapshot.tmp")
MAX_SNAPSHOT_BYTES = 5 * 1024 * 1024
os.chdir(ROOT)


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        if self.path == "/__progress_snapshot":
            if not os.path.exists(SNAPSHOT_FILE):
                self._send_json(404, {"ok": False, "error": "No local progress snapshot exists yet."})
                return
            try:
                with open(SNAPSHOT_FILE, "rb") as fh:
                    body = fh.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            except OSError:
                self._send_json(500, {"ok": False, "error": "Could not read the local progress snapshot."})
            return
        super().do_GET()

    def do_POST(self) -> None:
        if self.path != "/__progress_snapshot":
            self._send_json(404, {"ok": False, "error": "Unknown local endpoint."})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_SNAPSHOT_BYTES:
            self._send_json(413, {"ok": False, "error": "Progress snapshot is empty or too large."})
            return

        try:
            raw = self.rfile.read(length)
            payload = json.loads(raw.decode("utf-8"))
            if not isinstance(payload, dict) or payload.get("version") != 2:
                raise ValueError("Unsupported progress format")
            with open(SNAPSHOT_TMP, "w", encoding="utf-8") as fh:
                json.dump(payload, fh, indent=2, ensure_ascii=False)
                fh.write("\n")
            os.replace(SNAPSHOT_TMP, SNAPSHOT_FILE)
            self._send_json(200, {"ok": True, "file": os.path.basename(SNAPSHOT_FILE)})
        except (OSError, UnicodeDecodeError, json.JSONDecodeError, ValueError):
            self._send_json(400, {"ok": False, "error": "Could not save this progress snapshot."})

    def end_headers(self) -> None:
        # Always serve the current local files. Progress still lives in localStorage,
        # with an optional local JSON mirror handled by the endpoints above.
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:
        pass


class ThreadingServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main() -> None:
    url = f"http://127.0.0.1:{PORT}/"
    print("CS17 Operating Systems Reviewer")
    print(f"Running locally at: {url}")
    print("Progress is stored in browser localStorage and mirrored locally when this page is open.")
    print("Press Ctrl+C in this window when you are finished.\n")

    def open_browser() -> None:
        time.sleep(0.6)
        webbrowser.open(url)

    try:
        server = ThreadingServer(("127.0.0.1", PORT), QuietHandler)
    except OSError:
        print(f"Port {PORT} is already in use.")
        print("Close the other program using port 8765, then run the reviewer again.")
        input("Press Enter to close...")
        return

    threading.Thread(target=open_browser, daemon=True).start()
    with server:
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nReviewer stopped.")


if __name__ == "__main__":
    main()
