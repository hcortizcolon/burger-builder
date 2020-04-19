FROM node:12

COPY . /home/node/app

EXPOSE 3000

WORKDIR /home/node/app

RUN npm install

CMD [ "npm", "start" ]
