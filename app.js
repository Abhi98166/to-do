const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/",function(req,res){
    var today = new Date();
    var day = "";
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    res.render('list',{'day':days[today.getDay()]});
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});