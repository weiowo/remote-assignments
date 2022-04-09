const express = require('express');
const bodyParser= require('body-parser');
const pug = require('pug');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.set('view engine', 'pug');
app.use('/static',express.static('myapp'));

app.get('/',(req, res)=>{
    res.render('index.pug');
});


app.get('/sum.html',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html')
});
app.post('/sum.html',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html',{number:req.body.usernumber});
});

app.get('/getData', (req, res) => {
    var result;
    if (req.query.number=== undefined){
    result ='Lack of Parameters'
    }else if(isNaN(req.query.number)){
    result ='Wrong Parameters'
    }else{
    result = ((1 + Number(req.query.number))*Number(req.query.number))/2;
    }
    res.send(`${result}`)
});

app.post('/getData',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html');
});


app.get('/interface',(req, res)=>{
    res.render('interface');
});

app.post('/interface',(req, res)=>{
    res.render('interface',{ name:req.body.username });
});



app.listen(3000, ()=>{
    console.log('the application is running on: localhost3000')

});