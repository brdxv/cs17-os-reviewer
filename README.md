# CS17 Operating Systems Reviewer

A local-only exam reviewer built from the three supplied CS17 lessons:

- **Lesson 2:** Roles of Operating Systems in Computing
- **Lesson 3:** Generations of Operating Systems & Components of a Simple PC
- **Lesson 4:** Process Management in Operating Systems

## Question-bank size

- Lesson 2: **49 graded items + 24 flashcards**
- Lesson 3: **60 graded items + 38 flashcards**
- Lesson 4: **48 graded items + 33 flashcards**
- Total: **157 graded items + 95 flashcards**

The bank avoids padding the reviewer with near-identical duplicate prompts. A concept can reappear in a different format only when the recall skill changes, such as identifying a term versus enumerating its responsibilities.

## Features

- Flashcards with **Again / Hard / Good / Easy** ratings
- Identification with conservative typo-tolerant checking
- Enumeration with unordered matching and partial credit
- Multiple-answer questions with partial credit
- Lesson 4 scheduling calculations
- Mixed exam-style practice
- **Perfect Weak Areas** adaptive mode
- Per-concept mastery and recent-score weighting
- Weak-area dashboard
- Source slide labels on questions/cards
- Progress export/import
- Local static-file caching for repeat use

## Run on Windows

1. Extract the ZIP.
2. Double-click **`start.bat`**.
3. The reviewer opens at **http://127.0.0.1:8765/**.
4. Keep the command window open while studying.
5. Press **Ctrl+C** in that window to stop it.

The launcher tries `py` first and then `python`.

## Run on macOS / Linux

Open Terminal in the extracted folder and run:

```bash
python3 run_reviewer.py
```

You can also try `./start.command`.

## No database / local-only progress

There is **no database, account, or remote backend**.

- App files are cached locally by the browser Service Worker when running on localhost.
- Study progress, grading history, and mastery are stored in browser **localStorage** only.
- The reviewer does not send your answers or progress to a remote server.
- Clearing site data for `127.0.0.1:8765` removes progress unless you export a backup.

The runner deliberately uses the same port, **8765**, so the browser sees the same origin each time and keeps the same local progress.

## Mastery system

Every graded item is mapped to one or more source concepts. Recent results carry more weight than older attempts.

- **New:** not attempted
- **Weak:** below 55%
- **Learning:** still building mastery
- **Mastered:** at least 85% with repeated evidence

When you score below 75% in **Perfect Weak Areas**, the session can insert another *different* question tied to that concept later in the round.

## Progress backup

- **Export progress** saves a JSON backup.
- **Import progress** restores a JSON backup made by this reviewer.
- **Reset progress** clears the local reviewer history in the current browser.

## Source handling

The content is grounded in the supplied PPT wording, lists, examples, formulas, and visual tables/diagrams. Lesson 2 has a couple of repeated/mislabeled slide headings; the app flags those source notes instead of treating the mislabeled headings as separate concepts.
