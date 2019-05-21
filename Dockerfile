#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM node:12-alpine 
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# EXPOSE 3000

# RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]