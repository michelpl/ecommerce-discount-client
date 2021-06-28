const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const Promise = require('promise');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

var PROTO_PATH = 'src/discount.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).discount;

app.get('/', (req, res) => {
    function getDiscountFromService() {

        if (
            typeof req.query.id == 'undefined'
        ) {
            res.status(400).send('id field not found');
        }

        var client = new hello_proto.Discount('localhost:50051',
            grpc.credentials.createInsecure());

        return new Promise(function(resolve,reject) {
            client.GetDiscount({"productid" : req.query.id}, function(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.percentage.toFixed(2));
                }
            });
        });
    }
    getDiscountFromService().then(function(data) {
        console.log(data);

        res.json(data);
    }, function (data) {
        res.status(503).send('Service Unavailable');
    });
});

app.listen(2121);