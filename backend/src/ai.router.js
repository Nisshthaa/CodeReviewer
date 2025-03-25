const express=require('express')
const router=express.Router()
const aiController=require('../src/ai.controller')
router.post('/get-review',aiController.getReview)

module.exports=router