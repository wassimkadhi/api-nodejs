const express = require('express') ; 
const app=express();

require('./models/dbConfig');
const livreRoutes=require('./routes/livreController') ; 
const bodyParser =require('body-parser');


app.use(bodyParser.json());
app.use('/livres',livreRoutes);
app.listen(8080,() => console.log('server started at port 8080')); 