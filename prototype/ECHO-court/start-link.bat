@echo off
REM Double-click this on Windows to start the ECHO link relay.
cd /d "%~dp0"
cls
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Node isn't installed on this laptop.
  echo.
  echo   The prototype still works without it - two windows on ONE laptop
  echo   link to each other with nothing to set up. You only need the relay
  echo   to join TWO laptops.
  echo.
  echo   To install Node: https://nodejs.org  ^(the LTS download^)
  echo.
  pause
  exit /b 1
)
node relay.js
echo.
echo   The relay has stopped.
pause
