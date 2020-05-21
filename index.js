const express = require('express')

const app = express()

app.get('/', function(req, res, next){
    res.sendStatus(200)
})

app.get('/login', function(req, res, next){
    res.send({page: 'login', status: 'ok'})
})

app.get('/apps', function(req, res, next){
    res.send({page: 'apps', status: 'ok'})
})
app.listen(3001, function(){
    console.log(`Server listening on port:3001...`);
    
})
