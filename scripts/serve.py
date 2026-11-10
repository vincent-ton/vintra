"""Local-only review server. Serves the built site at the exact project base path."""
import http.server,functools,os
from pathlib import Path
root=Path(__file__).resolve().parents[1]
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):
  super().__init__(*args,directory=str(root/'dist'),**kwargs)
 def translate_path(self,path):
  if path.split('?')[0] in ['/','/vintra']: return str(root/'dist/index.html')
  if path.startswith('/vintra/'):path=path[len('/vintra'):]
  return super().translate_path(path)
 def end_headers(self):
  self.send_header('Cache-Control','no-store');super().end_headers()
os.chdir(root)
print('Private local preview: http://127.0.0.1:5187/vintra/',flush=True)
http.server.ThreadingHTTPServer(('127.0.0.1',5187),Handler).serve_forever()
