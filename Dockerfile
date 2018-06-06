FROM node

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
WORKDIR /tmp
RUN npm i

EXPOSE 80

ADD . /workspace
WORKDIR /workspace
RUN cp -a /tmp/node_modules /workspace

CMD npm start
