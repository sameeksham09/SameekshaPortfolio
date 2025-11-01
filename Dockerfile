# Use Nginx base image
FROM nginx:alpine

# Copy website files to Nginx folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80