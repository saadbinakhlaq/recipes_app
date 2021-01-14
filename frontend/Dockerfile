# pull official base image
FROM node:15.5.1-slim

RUN apt-get update || : && apt-get install python build-essential -y
# set working directory
WORKDIR /app

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn install
# add app
COPY . ./

# start app
CMD ["yarn", "run", "start"]