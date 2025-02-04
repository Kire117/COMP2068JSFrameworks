const http = require(`http`);

const port= 3000;

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type': 'text/plain'});

    res.end("Hello World!");
});

server.listen(port,() =>{
    console.log(`Server is running at port http:://localhost${port}`)
});