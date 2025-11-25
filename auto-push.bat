@echo off
cd /d "%~dp0"
echo Watching for file changes...

:loop
timeout /t 3 >nul

git add .
git commit -m "auto update" >nul 2>&1
git push origin main >nul 2>&1

goto loop
