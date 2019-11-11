const http = require('http');

const server = http.createServer((req,resp) => {
    if (req.url == '/welcome') {
        resp.write('Welocme Node js');
       resp.end();
    }
    if(req.url == '/courses'){
        resp.write(JSON.stringify([1,2,3,4,5]));
        resp.end();
    }
});

server.listen(3000);


console.log('Listening on port 3000')