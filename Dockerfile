FROM node:16-alpine
WORKDIR /sistema-sueldos
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
COPY . ./