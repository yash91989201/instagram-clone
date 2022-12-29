FROM node:hydrogen-alpine3.16
WORKDIR /instagram_clone
COPY package.json . 
# install typescript globally
RUN npm install -g typescript 
# bash script for different installation for prod and dev
ARG NODE_ENV
# RUN if [ "${NODE_ENV}" = "development"  ] ;\
#     then npm install;\
#     else npm install --production;\
#     fi
RUN npm install

ENV NODE_ENV=${NODE_ENV}

COPY . . 

CMD [ "npm","run","dev" ]