const {User} =require('../models/index.js');
const router =require('express').Router();

router.get('/',(req,res)=>{
    User.findAll().then(users=>{
        res.send(users)
    })
})
router.post('/',(req,res)=>{
    User.create({
        ...req.body
    }).then(user=>{
        res.status(201).send({user,message:'User created successfully'})
    })
})
module.exports=router