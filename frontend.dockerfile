FROM node:14
WORKDIR /usr/src/app

COPY front/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY front/ .

# Build the app
RUN npm run build

EXPOSE $PORT

# Start the app
CMD [ "npm", "start" ]


# BUILD COMMAND
# docker build --file=frontend.dockerfile  -t web-frontend .