const express = require('express');
const bodyParser= require('body-parser');
const pug = require('pug');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.set('view engine', 'pug');
app.use(express.static('views'));

app.get('/',(req, res)=>{
    res.render('index.pug');
});

//send file的方式!

/*app.get('/sum.html',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html')
});
app.post('/sum.html',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html',{number:req.body.usernumber});
});*/

app.get('/getData', (req, res) => {
    var result;
    if (req.query.number=== undefined){
    result ='Lack of Parameters'
    }else if(isNaN(req.query.number)){
    result ='Wrong Parameters'
    }else if(req.query.number<=0){
        result ='Wrong Parameters'
    }else if(req.query.number % 1 !=0){
        result ='Wrong Parameters'
    /*}else if(Number.IsInteger(req.query.number)==false){
        result ='Wrong Parameters'*/
    }else{
    result = ((1 + Number(req.query.number))*Number(req.query.number))/2;
    }
    res.send(`${result}`)
});

app.post('/getData',(req, res)=>{
    res.sendFile(__dirname +'/views/sum.html');
});


app.get('/login',(req, res)=>{
    res.render('login');
});

app.post('/submit',(req, res)=>{
    res.render('login',{ name:req.body.username });
});


app.listen(3000, ()=>{
    console.log('the application is running on: localhost3000')

});
