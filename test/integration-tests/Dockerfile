FROM node

ADD package.json /tmp/package.json
WORKDIR /tmp
RUN npm i

ADD . /workspace
WORKDIR /workspace
RUN cp -a /tmp/node_modules /workspace

CMD npm run integration-test
