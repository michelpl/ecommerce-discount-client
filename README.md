## E-commerce discount GRPC client

## Description

E-commerce discount GRPC client is an API that works as a client for the discount service

##gRPC

[gRPC](https://grpc.io/) gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment.

## Requirements

- Nodejs
- Npm

## Installation

**At the project root folder, run.**

1.  `npm install`

## Usage

- To start the node server, run `npm start`.

- `E-commerce discount GRPC client` will be available on `localhost:2121`

- For get the discount value, just perform a GET request to the api root with the product id as query string `id={PRODUCT-ID}` lik the following command

```shell
curl --location --request GET 'http://localhost:2121?id=4'
```
![curl](https://imgur.com/oPasYyg.gif)

>If the discount service is unavailable, the `E-commerce discount GRPC client` will returns the `503` http status code
