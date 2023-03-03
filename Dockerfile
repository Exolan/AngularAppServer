FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install prettier -g

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]