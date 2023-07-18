FROM nginx:alpine
RUN mkdir -p /etc/nginx/ssl

COPY cert.pem /etc/nginx/ssl/cert.pem
COPY key.pem /etc/nginx/ssl/key.pem

COPY index.html /usr/share/nginx/html
COPY Webcam.js /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
