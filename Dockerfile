FROM node
MAINTAINER Sonu
WORKDIR /app
COPY ./package.json /app/
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm","start"]
