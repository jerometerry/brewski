FROM node:0.12.2

ADD /src /src
WORKDIR /src

RUN npm install -g bower; \
	cd /src; npm install; \
	bower install --allow-root

EXPOSE 8081

CMD ["node", "app.js"]