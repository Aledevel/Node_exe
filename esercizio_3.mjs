import {createServer, request} from "node:http";

const server = createServer((request, response)=>{
    console.log("Ciao, richiesta ricevuta correttamente");
    response.statusCode=200;
    response.setHeader("Content-Type","text/html");
    response.end("<html><body><h1>ciao, ciao baaaaambina</h1></body></html>")
});

server.listen(3000,()=>{
    console.log('ciao ciao da https://localhost:3000')
})