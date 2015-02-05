# Benefits

Here are some benefits we can enjoy by using Lambda instead of our architecture

* no CloudFormation template to configure
* no deploy script on each push of new code
* no swapping and moving of code when the server first comes up
* thus no two processes that are similar but enough different to not be the same
* no HAProxy configuration reload
* no server to manage (with all implications such as scaling, logs, stats, etc)

To run this we just send an event

```javascript
var params = { FunctionName: 'stringify', InvokeArgs: ... };
lambda.invokeAsync(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
```
