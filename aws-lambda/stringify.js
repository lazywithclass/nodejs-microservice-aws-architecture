console.log('Loading event');
exports.handler = function(event, context) {
  console.log(JSON.stringify(event, null, '  '));
  context.done(null, '');
};
