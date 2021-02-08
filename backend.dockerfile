FROM node:14

WORKDIR /usr/src/app

RUN mkdir -p back

WORKDIR /usr/src/app/back

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY back/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY back/ ./

EXPOSE $PORT

WORKDIR /usr/src/app/back

CMD ["node", "src/index.js"]


# BUILD COMMAND
# docker build --file=backend.dockerfile  -t web-backend .

# RUN COMMAND
# docker run -it --rm -p 4000:4000 web-backend:latest 