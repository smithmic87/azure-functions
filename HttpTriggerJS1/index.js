module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(JSON.stringify(req));
    if (req.name) {
        res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + req.name
        };
    }
    else {
        res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
  
    var newSession = {
        SessionID: 'abc123',
        FirstName: 'Michael',
        LastName: 'Smith'
    };

    context.bindings.newSession = JSON.stringify(newSession);
    context.bindings.outputBlob = JSON.stringify(newSession);
    context.done(null, res);
};