FROM node:16.14.0-slim
WORKDIR /opt/www

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn

COPY ./ ./

RUN yarn build

CMD ["yarn", "start"]