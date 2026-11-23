@echo off
echo ================================================================
echo  SymboDoc QA - Classical AI Document Question Answering System
echo  Ramaiah University of Applied Sciences - AID201A Assignment 1
echo ================================================================
echo Launching website in default web browser...

start "" "%~dp0index.html"

echo Website opened directly.
echo If you prefer running via a local HTTP server, run:
echo   python "%~dp0serve.py"
pause
