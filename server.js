const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const UserRoute = require('./app/routers/userRouter')

var port = process.env.PORT || 9095; 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose 
.connect('mongodb://localhost:27017/fitezo', {
      useNewUrlParser: true,
      useUnifiedTopology: true })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


// only for demo
app.get("/", (req, res) => {
  res.send({"message": "node apis running fine"});
});


app.use('/user',UserRoute);

app.listen(port, () => {
  console.log(`API started, Assigned port :${port}`)
});