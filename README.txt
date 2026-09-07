CS17 OPERATING SYSTEMS REVIEWER
===============================

WHAT THIS IS
------------
A local-only study webpage built from the three supplied CS17 Operating Systems lessons:
- Lesson 2: Roles of Operating Systems in Computing
- Lesson 3: Generations of Operating Systems & Components of a Simple PC
- Lesson 4: Process Management in Operating Systems

The review bank is designed around distinct lesson concepts instead of inflating the item count by repeating the same answer. A topic may reappear in a different question type when the skill being tested is different, such as identifying a term versus enumerating its responsibilities.

HOW TO RUN ON WINDOWS
---------------------
1. Extract the ZIP.
2. Double-click start-reviewer.bat
3. Your browser should open automatically at http://127.0.0.1:8765/.
4. Keep the command window open while studying.
5. Press Ctrl+C in the command window when finished.

If Windows asks which app should run a .bat file, choose Command Prompt.

HOW TO RUN ON macOS / LINUX
---------------------------
1. Extract the ZIP.
2. Open Terminal in the extracted folder.
3. Run:
   python3 run_reviewer.py

On macOS you can also try double-clicking start-reviewer.command.

NO DATABASE / LOCAL-ONLY STORAGE
--------------------------------
There is no database and no account system.
- App files are cached by the browser's Service Worker when served on localhost.
- Study progress, grading history, and mastery are stored in browser localStorage only.
- Nothing is sent to a remote server by the reviewer.
- Clearing browser site data for localhost will remove local progress unless you export a backup first.

STUDY MODES
-----------
1. Dashboard
   - Lesson coverage, mastery, accuracy, weak areas, and topic definitions.

2. Flashcards
   - One concept per card.
   - Rate each as Again / Hard / Good / Easy.
   - Ratings affect topic mastery.

3. Identification
   - Type the lesson term from a definition or scenario.
   - Conservative fuzzy matching tolerates small spelling errors.

4. Enumeration
   - Recall complete groups such as OS responsibilities or process states.
   - Answer order does not matter.
   - Partial credit is based on correctly recalled unique entries.

5. Multiple Answer
   - More than one option may be correct.
   - Partial credit rewards correct selections and penalizes incorrect selections.

6. Scheduling Drills (Lesson 4)
   - Practice AT, BT, CT, TAT, WT, RT, FCFS, SJF, and Round Robin calculations.

7. Mixed Practice
   - Randomized exam-style mix from the currently selected lesson.

8. Perfect Weak Areas
   - Uses your local attempt history to prioritize concepts with lower recent mastery.
   - If you score below 75%, the adaptive round can insert another question tied to the same concept later in the session.

MASTERY SYSTEM
--------------
Each graded question is mapped to one or more lesson concepts. The reviewer keeps a weighted average of recent scores for each concept.

Topic labels:
- New: not attempted yet
- Weak: below 55%
- Learning: in progress
- Mastered: at least 85% with repeated evidence

The system emphasizes recent attempts so improvement is reflected quickly. Weak-Area mode uses those topic scores to decide what to review next.

BACKUP / RESET
--------------
- Export progress: creates a JSON backup of your browser-only progress.
- Import progress: restores a JSON backup created by this reviewer.
- Reset progress: clears the reviewer's local progress from the current browser.

SOURCE NOTES
------------
The app preserves the supplied PPT terminology and slide framing. It also flags two obvious Lesson 2 slide-label inconsistencies inside the dashboard rather than silently treating the mislabeled headings as separate concepts.

FILES
-----
index.html        Main page
styles.css        Styling
app.js            Study, grading, and adaptive mastery logic
data.js           Core source-grounded question bank
extensions.js     Additional in-depth source-grounded coverage
sw.js             Local app-file caching
run_reviewer.py   Small localhost server
start-reviewer.bat Windows launcher
start-reviewer.command macOS launcher

No third-party packages, web frameworks, or database are required.
