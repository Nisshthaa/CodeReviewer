const express=require("express")
const aiRoutes=require('./ai.router')
const cors=require('cors')
const app=express()
app.use(cors({
  origin: 'https://code-reviewer-tau.vercel.app',
  credentials: true,
}));
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello world")
 })

app.use('/ai',aiRoutes)

module.exports=app