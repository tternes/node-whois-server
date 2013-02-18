var net = require('net');
var fs = require('fs');

fs.readFile('./template.txt', 'utf8', function (err, data) {

    if (err) throw err;
    var template = data;
    var server = net.createServer(function(c) {

        console.log('client connected: ' + c.remoteAddress +":"+ c.remotePort);
        c.on('end', function() {
            console.log('client disconnected');
        });

        c.on('data', function(data) {
            var domain = data.toString().trim().toUpperCase();
            console.log('received ' + domain);

            var output = template.replace(/__domain__/g, domain);
            c.write(output, function() {
                c.end();
            });
        });

    });

    server.listen(43, function() {
        console.log('server bound');
    });

});
