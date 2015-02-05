var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'YOUR-ACCESS-KEY-ID',
  secretAccessKey: 'YOUR',
  region: 'us-east-1'
});
var lambda = new AWS.Lambda({apiVersion: '2014-11-11'});

var params = {
  FunctionName: 'stringify',
  InvokeArgs: '{ "stringify": "me", "please": "!" }'
};
lambda.invokeAsync(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
