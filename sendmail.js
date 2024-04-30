
import nodemailer from 'nodemailer'

function generateOTP() {
    
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString(); 
}

let otp = generateOTP()

console.log( otp);

function Mail(To)
{
    const transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{
    
            user:"nagalakshmib48@gmail.com",
            pass:"gbwupovcoztkinjb"
        }
    })
    
    let mailoptions={
    
        from:"nagalakshmib48@gmail.com",
        to:To,
        subject:"hello",
        text:"hjdhjasdf your otp is otp",
        text: `Your OTP is ${otp}`
    
        

    }
    transporter.sendMail(mailoptions,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("mail send succesfully")
        }
    })
}

export default Mail;

