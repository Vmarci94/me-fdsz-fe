FROM ubuntu
LABEL maintainer="vmarci94@gmail.com"
RUN apt-get update && apt-get install -y git \
  nodejs \
  npm
RUN git clone https://github.com/Vmarci94/me-fdsz-fe && cd me-fdsz-fe && npm install && npm install -g @angular/cli@latest && ng serve
EXPOSE 4200
