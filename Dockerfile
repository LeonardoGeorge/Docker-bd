FROM node:22

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Instalar nodemon globalmente para melhor hot reload
RUN npm install -g nodemon

CMD ["nodemon", "index.js"]