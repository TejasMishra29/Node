const express=require('express')
const path=require('path')

const app=express()

staticpath=path.join(__dirname,'../public')

app.use(express.static(staticpath))

app.get('/',(req,res)=>{
    res.send("Hello from home page")
})

app.listen(8000,()=>{
    console.log('server is running')
})