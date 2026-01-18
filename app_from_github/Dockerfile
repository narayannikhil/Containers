FROM node

WORKDIR /containers/nodejs/node_from_github

#installing git here 
RUN apt-get update && apt-get install -y git 

RUN git clone https://github.com/narayannikhil/Dockerizing_node_project-.git .

ENV PORT=3000

#EXPOSE 3000

RUN npm ci

CMD [ "npm" , "start" ]


#if anyone wants to pull our image 
#docker build -t app-from-github-with-env .
#docker run -it --init --publish 3001:3000 app-from-github-with-env:latest
#3001 is my host machine code and 3000 is container port
#EXPOSE 3000 => this command will  the container will by default expose the port 3000 for host
#docker run -it --init -P(to run exposed port) app-from-github-with-env:latest
#it will connect your container port to some random port not needed much


