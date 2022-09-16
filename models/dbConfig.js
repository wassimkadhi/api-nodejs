const mongoose = require('mongoose') ; 
mongoose.connect("mongodb://localhost:27017/test",
 {useNewUrlParser : true ,useUnifiedTopology : true},
 (err) => {
    if(!err) console.log("mongo connected")  ; 
   else console.log("errore connection= "+ err) ; 

 }
 )


    