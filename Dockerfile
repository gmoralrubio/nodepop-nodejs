FROM node:24.14.1-trixie-slim
WORKDIR /usr/src/nodepop
COPY . .
RUN npm install --omit=dev
CMD npm run start
EXPOSE 3000
