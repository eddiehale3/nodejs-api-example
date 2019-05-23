const express = require('express'); 
const os = require('os');
const app = express(); 
const port = 3000; 

var hostname = os.hostname();
app.get('/', (req, res) => {
    var json = JSON.stringify({
        message: "Hello World from your container!",
        hostname: hostname.toString()
    });
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(json); 
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
