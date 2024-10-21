FROM node:18                
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start:prod"]

# FROM version de node 
# WORKDIR carpeta donde se ubica mi proyecto
# COPY package copiara todas mis dependencias o instalaciones necesarias
# RUN npm install instalara todas las dependencias copiadas
# COPY . . esto copia todo todo es todo para que funcione la app

# CMD ["npm", "run", "start:prod"] Esto ejecutara el comando para que se 
# inicie el proyecto como nest star pero npm run start:prod inicia en
# forma de produccion osea las "" son para hacer un espacio