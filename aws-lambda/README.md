# Experimenting with AWS Lambda

You might want to have a look at [this guide](http://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events-deploy.html)
to get a general understanding of what's going on.

## How to use this

Run the following from a command prompt

```bash
$ ./zip.sh
$ node upload.js
```

At this point the function should be in your [AWS Lambda console](https://console.aws.amazon.com/lambda/home#/functions).

You could then make it do something, run the following from a command prompt

```bash
$ node invoke.js
{ Status: 202 }
```

If everything went well you've seen `{ Status: 202 }` appear, this means the request has been accepted and it's been take care of.
You will then be able to view the log in your [CloudWatch Logs dashboard](https://console.aws.amazon.com/cloudwatch/home?#logs:)
and see some info about what just happened.
