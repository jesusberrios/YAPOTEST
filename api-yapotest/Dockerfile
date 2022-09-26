FROM node:12.22.7

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

WORKDIR /app/src

##CMD ["mkdir", "temp"]

EXPOSE 3001

CMD ["npm","run","prod"]
