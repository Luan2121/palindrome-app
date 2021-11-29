# set node version
FROM node:12.0.0

# set working directory
WORKDIR /usr/src/app

# copy these files from the host into the image
COPY yarn.lock .
COPY package.json .

# run the command inside the image filesystem
RUN yarn --prod --frozen-lockfile

# copy the rest of the app's source code from the host to the image filesystem
COPY . .

# make the app available on port 3000
EXPOSE 8000

RUN yarn build

# start the server within the container:
CMD [ "yarn", "start" ]