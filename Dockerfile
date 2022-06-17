FROM node:latest
ENV PATH="./node_modules/.bin:$PATH"
COPY src .
RUN npm run build
CMD ["npm", "start"]
