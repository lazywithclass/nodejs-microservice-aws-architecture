var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'YOUR-ACCESS-KEY-ID',
  secretAccessKey: 'YOUR',
  region: 'us-east-1'
});
var lambda = new AWS.Lambda({apiVersion: '2014-11-11'});

var params = {
  FunctionName: 'stringify',
  FunctionZip: require('fs').readFileSync('stringify.zip'),
  Handler: 'stringify.handler',
  Mode: 'event',
  // you might want to create a role here
  // https://console.aws.amazon.com/iam/home#roles
  Role: 'arn:aws:iam::727371161822:role/lambda-exec',
  Runtime: 'nodejs',
  Description: 'a function that passes the payload into JSON.stringify and returns the result',
  MemorySize: 128,
  Timeout: 3
};
lambda.uploadFunction(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
