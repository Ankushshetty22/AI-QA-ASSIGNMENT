#!/usr/bin/env python3
"""
Lightweight local HTTP server for SymboDoc QA System.
Zero external dependencies (uses standard library http.server).
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print(f"================================================================")
        print(f" SymboDoc QA - Classical AI Document Question Answering System ")
        print(f" Ramaiah University of Applied Sciences - AID201A AI Assignment 1 ")
        print(f"================================================================")
        print(f" Serving at: {url}")
        print(f" Opening web browser automatically...")
        print(f" Press Ctrl+C to terminate.")
        print(f"================================================================")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    main()
