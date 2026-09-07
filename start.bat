@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 run_reviewer.py
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  python run_reviewer.py
  goto :eof
)
echo Python was not found on this computer.
echo You can still try opening index.html directly in a modern browser,
echo but localhost mode is recommended for reliable caching.
pause
