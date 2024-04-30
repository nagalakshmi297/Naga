import express from 'express'
import nodemailer from 'nodemailer'
import Mail from '../NAGA/sendmail.js'
const app=express()

app.get('/adhi/:email',(req,res)=>{
    const To=req.params.email
    Mail(To);

    res.send("response")
})



app.listen(2000,()=>{

    console.log("server started")
})