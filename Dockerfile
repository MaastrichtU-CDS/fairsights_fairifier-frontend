FROM nginx:alpine

ADD dist/fairifier-frontend/* /usr/share/nginx/html/.

EXPOSE 80
