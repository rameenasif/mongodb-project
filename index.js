// const http=require('http')
// const fs=require('fs')
// const dataToWrite='This an addition to this file'
// const dataToAppend='This an addition to appended to this file'
// fs.readFile('readMe.txt','utf8',(error,data)=>{
//     if(error)
//     {
//         console.log('Cannot access this file',error)
//         return
//     }
//     else{
//         console.log(data)
//     }

// })
// fs.writeFile('readMe.txt',dataToWrite,'utf8',(error)=>{
//     if(error)
//     {
//         console.log('Data cannot be written')
//     }
//     console.log('Data is written')
// })
// fs.appendFile('readMe.txt',dataToAppend,'utf8',(error)=>{
//     if(error)
//     {
//         console.log('Data cannot be appended to this file')
//     }
//     console.log('Data has been appended')
// })
// const myServer=http.createServer((request,response)=>{
//     response.statusCode=200
//     response.setHeader('Content-Type','text/plain')
//     response.end('This is my first server')
// })
// myServer.listen('3000','localhost',()=>{
//     console.log('Server has started')
// })

// //os modules
// const os=require('os')
// console.log('arch method: '+os.arch())
// console.log('platform method: '+os.platform())
// console.log('total memory: '+os.totalmem())
// console.log('cpus method:'+os.cpus())
// console.log('parallelism:'+os.availableParallelism())
// console.log('free memory method:'+os.freemem())
// console.log('home directory method:'+os.homedir())
// console.log('host name method:'+os.hostname())
// console.log('load avg method:'+os.loadavg())
// console.log('machine method:'+os.userInfo())
// console.log('type method:'+os.type())
// console.log('uptime method:'+os.uptime())
// console.log('uptime method:'+os.release())
// console.log('release method:'+os.release())
// console.log('network interface method:'+os.networkInterfaces())

import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
const app=express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.get('/get',(req,res)=>{
    res.send('API response got')

})
dotenv.config()
let port=process.env.PORT
app.use(express.json())
app.listen(port,()=>{
    console.log('Server is started',port)
})
