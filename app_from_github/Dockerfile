FROM node

WORKDIR /containers/nodejs/node_from_github

#installing git here 
RUN apt-get update && apt-get install -y git 

RUN git clone https://github.com/narayannikhil/Dockerizing_node_project-.git .

ENV PORT=3000

RUN npm ci

CMD [ "npm" , "start" ]


#if anyone wants to pull our image 
#docker build -t app-from-github-with-env .
#docker run -it --init --publish 3001:3000 app-from-github-with-env:latest


