FROM php:7.4-apache
RUN apt -yqq update

WORKDIR /usr/src/app

## GIT
RUN apt-get install git -y
RUN apt-get install npm -y
RUN git clone https://github.com/michelpl/ecommerce-discount-client.git .
RUN npm install
RUN npm start


