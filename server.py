import http.server
import socketserver
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers for smooth local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("🌿 Dr. Apkesha Patel | Ayurvedic Healthcare Brand Website")
        print(f"👉 Local URL: http://localhost:{PORT}")
        print("Doctor: Dr. Apkesha Patel (BAMS, Ex-AYUSH Medical Officer, Govt. PHC, Gujarat)")
        print("Address: Lunawada, Mahisagar, Gujarat 389230")
        print("Phone: +91 83476 75394 | Email: apexapatel316@gmail.com")
        print("Press Ctrl+C to stop the server")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            sys.exit(0)
