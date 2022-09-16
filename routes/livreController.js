const express =require('express') ; 
const router = express.Router() ; 
const ObjectId =require('mongoose').Types.ObjectId;

const {LivreModel} =require('../models/livremodel');

router.get('/',(req , res ) =>{
LivreModel.find((err, docs)=> {
    console.log(docs);
})

})



router.post('/',(req,res) => {
    console.log(req.body) ; 
    const newRecorder = new LivreModel({
author:req.body.author ,
birthDate:req.body.birthDate , 
ville:req.body.ville 

    })

    newRecorder.save((err,docs) => 
    {
if(!err) res.send(docs) ;
else console.log('recorder not adde= '+err );

    })
})

router.put("/:id",(req,res)=>
{if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("unkwnow :" +req.params.id);

    const updatRecorder={
        author:req.body.author ,
        birthDate:req.body.birthDate,
        ville:req.body.ville

        };

        LivreModel.findByIdAndUpdate(
            req.params.id,
            {$set:updatRecorder} , 
            {new:true},
            (err,docs) =>{
                if(!err) res.send(docs);
                else console.log("erreur de upadet " + err) ;
            }
        )



})

router.delete("/:id",(req,res)=>
{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send("unknown :"+req.params.id) ; 
LivreModel.findByIdAndDelete(
    req.params.id,
    (err,docs)=>
    {if(!err)res .send(docs);
        else console.log("delleted errore"+err) ;

    }
    

)

})




module.exports = router ;