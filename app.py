from flask import Flask, send_from_directory, redirect
import os


app = Flask(__name__)


# Redirect root to English homepage
@app.route('/')
def home():
    return redirect('/en', code=302)


# Serve English index.html
@app.route('/en')
def serve_en_index():
    return send_from_directory('en', 'index.html')


# Serve Arabic index.html
@app.route('/ar')
def serve_ar_index():
    return send_from_directory('ar', 'index.html')


# Serve static files for English
@app.route('/en/<path:path>')
def serve_en_file(path):
    full_path = os.path.join('en', path)
    if os.path.isfile(full_path):
        return send_from_directory('en', path)
    return 'File not found', 404


# Serve static files for Arabic
@app.route('/ar/<path:path>')
def serve_ar_file(path):
    full_path = os.path.join('ar', path)
    if os.path.isfile(full_path):
        return send_from_directory('ar', path)
    return 'File not found', 404


# Optional: serve global static assets (e.g., favicon, shared css/js)
@app.route('/<path:filename>')
def serve_global_static(filename):
    allowed_ext = ('.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.ico')
    if filename.endswith(allowed_ext) and os.path.isfile(filename):
        return send_from_directory('.', filename)
    return 'File not found', 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
