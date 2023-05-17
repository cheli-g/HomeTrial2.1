const express=require('express');
const router=express.Router();
const user_model=require('../models/userData');
const mongoose= require('mongoose');
// const {,createAllArticles,updateArticles,deleteArticles} = require('../controllers/articles');
//getAll users
router.get('/',(req,res)=>{
        user_model.find().then((userData)=>{
            res.status(200).json({
            userData
        });
        }).catch(error=>{
             res.status(500).json({
                 error
             });
        
        })
    });
//get user
router.get('/:userId',(req,res)=>{
    const userId=req.params.userId;

    user_model.findById(userId).then((userData)=>{
        res.status(200).json({
            userData
        })
    }).catch(error=>{
            res.status(500).json({
                error
            });
       })
    
})    
    //create a new user
router.post('/',(req,res)=>{

  
    const {fullName,idNumber,address,bearthDate,phon, mobile} =req.body;
    
    const user= new user_model({
        _id: new mongoose.Types.ObjectId(),
        fullName,idNumber,address,bearthDate,phon, mobile});
    
    user.save().then(()=>{
         res.status(200).json({
             message:'user created'
         })
        }).catch(error=>{
             res.status(500).json({
                 error
             });
         
     });



});


module.exports=router;
