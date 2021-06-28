var PROTO_PATH = './discount.proto';

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

function getDiscount() {
  var client = new hello_proto.Discount('localhost:50051',
    grpc.credentials.createInsecure());

  client.GetDiscount({"productid" : 1}, function(err, response) {
    console.log(response.percentage);
  });
}
