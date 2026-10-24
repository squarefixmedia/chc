Christian Hospital Chhatarpur - website (static, ready to host)

Pages: / (index.html), /about, /services, /nursing-services, /school-of-nursing, /community, /research, /contact
Files: *.html pages, app.js (shared header/footer + interactions), assets/ (images), vercel.json (clean URLs on Vercel)

Vercel (CLI):  npm i -g vercel  ->  cd into this folder  ->  vercel --prod
Hostinger:     hPanel > File Manager > public_html > upload & extract this ZIP
               (on Hostinger, add .html links or keep using Vercel for clean URLs; see note below)

Note for non-Vercel hosts: links use clean URLs like /about. On Apache/Hostinger add this to .htaccess:
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

Contact form opens the visitor's email app addressed to chhatarpur@eha-health.org.
