#!/usr/bin/env python3
"""Tiny local-only web server for the CS17 OS Reviewer."""
from __future__ import annotations

import http.server
import os
import socketserver
import threading
import time
import webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8765  # Keep this fixed so browser localStorage stays on the same origin.
os.chdir(ROOT)


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        # Always serve the current local files. Progress still lives in localStorage.
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
    print("Progress is stored only in this browser's local storage.")
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
