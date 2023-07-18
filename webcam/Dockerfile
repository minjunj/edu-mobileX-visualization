# ---- Base Stage ----
FROM nginx:alpine

# Create directories for SSL certificate and key
RUN mkdir -p /etc/nginx/ssl

# Copy SSL certificate and key
COPY cert.pem /etc/nginx/ssl/cert.pem
COPY key.pem /etc/nginx/ssl/key.pem

# Copy index.html and Webcam.js
COPY index.html /usr/share/nginx/html
COPY Webcam.js /usr/share/nginx/html

# Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
