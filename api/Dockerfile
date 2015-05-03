FROM node:0.12.2

ADD /src /src
WORKDIR /src

RUN cd /src; npm install

EXPOSE 8080

CMD ["node", "app.js"]