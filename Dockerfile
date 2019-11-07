FROM nginx:alpine

ADD dist/fairifier-frontent/* /usr/share/nginx/html

EXPOSE 80
