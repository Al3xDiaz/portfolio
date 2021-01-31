server {
        root /home/ubuntu/portafolio/portafolio/build;        
        index index.html index.htm index.nginx-debian.html;
        server_name alex.coderatbest.com;
        location /api/ {
            proxy_pass http://localhost:5000/;
        }
    listen [::]:443 ssl; 
    listen 443 ssl; 
    ssl_certificate /etc/letsencrypt/live/coderatbest.com/fullchain.pem; 
    ssl_certificate_key /etc/letsencrypt/live/coderatbest.com/privkey.pem; 
    include /etc/letsencrypt/options-ssl-nginx.conf; 
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; 
}
server {
    if ($host = alex.coderatbest.com) {
        return 301 https://$host$request_uri;
    } 
listen 80 ;
        listen [::]:80 ;server_name alex.coderatbest.com;
    return 404;
}
