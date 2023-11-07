const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('<h1>Hello...</h1>')
        res.end()
    }else if(req.url == '/about'){
        res.write('<h1>About...</h1>')
        res.end()
    }else{
        res.write('<h1>Page not found</h1>')
        res.end()
        }
})

server.listen(3000, ()=>{
    console.log('Server running...');
})