const express=require('express');
const router=express.Router();
const corona_model=require('../models/coronaData');
const mongoose= require('mongoose');

router.get('/',(req,res)=>{

    
    corona_model.find().then((coronaData)=>{
        res.status(200).json({
            coronaData
    });
    }).catch(error=>{
         res.status(500).json({
             error
         });
    
    })
});

router.get('/:coronaId',(req,res)=>{
    const coronaId=req.params.coronaId;
    
    corona_model.findById(userId).then((coronaData)=>{
        res.status(200).json({
            coronaData
        })
    }).catch(error=>{
            res.status(500).json({
                error
            });
       })
    
})   

router.post('/',(req,res)=>{
    // res.status(200).json({
    //     message:'plase insert: idNumber, timeOfVaccination -in arry, insert the dates of all one of them ,manufacturer-of the company ,coronaVirusDesease -date start and date end'
    // })
  
    const {idNumber,timeOfVaccination,manufacturer,coronaVirusDesease} =req.body;
    
    const user= new corona_model({
        _id: new mongoose.Types.ObjectId(),
        idNumber,
        timeOfVaccination,
        manufacturer,
        coronaVirusDesease
    });
    
    user.save().then(()=>{
         res.status(200).json({
             message:'coronaData created'
         })
        }).catch(error=>{
             res.status(500).json({
                 error
             });
         
     });



});


module.exports=router;
