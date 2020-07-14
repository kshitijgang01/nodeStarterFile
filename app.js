const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'public')));

app.use('/hello',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','hello.html'));
});

app.use('/bye',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views",'bye.html'));
});
app.use((req,res,next)=>{
    res.write('<h1>not found</h1>');
    res.end();
});

app.listen(3000);