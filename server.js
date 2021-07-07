const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser');
const ejs=require('ejs');
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/bmi', function(req, res){
  res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmi",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var result=Number(10000*(weight/(height*height)));
  res.send("your BMI is "+result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
