from node:14-alpine
WORKDIR /app
copy package.json yarn.lock .
RUN yarn install
COPY . ./app
ENV HOST 0.0.0.0
EXPOSE 5000
CMD ["yarn", "start"]
