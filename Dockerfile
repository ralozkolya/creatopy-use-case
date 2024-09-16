FROM node:20.17.0

WORKDIR /app

COPY package*.json .

RUN npm i

COPY src/ ./src

RUN npm run build
RUN rm src -rf

CMD ["npm", "start"]
