#build
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install

COPY . .

RUN yarn build


#prod
FROM node:18-alpine 

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=build /usr/src/app/dist ./dist


COPY package.json yarn.lock ./

RUN yarn install --production

RUN rm package.json yarn.lock

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
