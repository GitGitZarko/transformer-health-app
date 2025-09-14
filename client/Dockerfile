FROM node:21-alpine AS build_image
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5005
CMD ["npm", "run", "preview"]

#FROM nginx
#COPY --from=build_image /app/dist /usr/share/nginx/html
#CMD ["nginx", "-g","daemon off;"]