require('dotenv').config()
const app=require('./src/app')

app.listen(3000,()=>{
    console.log("Server listening at port http://localhost:3000")
})