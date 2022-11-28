const http = require('http');
const port = 3000;
http.createServer((req,res)=>{
    res.end('<h1>Workin!</h1>')
}).listen(port,() => console.log('Server running' ));