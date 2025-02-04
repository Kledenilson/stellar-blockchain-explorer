FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
npm install chart.js@latest react-chartjs-2@latest

COPY . .

RUN npm run build

EXPOSE 3004

CMD ["npm", "start"]