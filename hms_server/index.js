const express=require('express')

const server=express()

const cors=require('cors')


const logic=require('./service/logic')
const { collection } = require('./service/db1')

//connect with frontend

server.use(cors({orgin:'http://localhost:3000'}))


server.use(express.json())

//port setting for server


server.listen(8000,()=>{

console.log("served started at 8000");
});

server.get('/getAllEmployee',(req,res)=>{

    logic.allEmployee().then(result=>{
    
        res.status(result.statusCode).json(result)
    })
    
    })
    
    server.delete('/deleteEmployee/:id',(req,res)=>{
    
        logic.removeEmployee(req.params.id).then(result=>{
        
            res.status(result.statusCode).json(result)
        })
        
        })
    
    server.post('/addEmployee',(req,res)=>{
    
        logic.addEmployee(req.body.id,req.body.taskname,req.body.description,req.body.deadline,req.body.assignedprjct).then(result=>{
        
            res.status(result.statusCode).json(result)
        })
        
        })
    
        server.get('/getAnEmp/:id',(req,res)=>{
    
            logic.getAnEmp(req.params.id).then(result=>{
            
                res.status(result.statusCode).json(result)
            })
            
            })
            server.post('/editEmp/',(req,res)=>{
    
                logic.editEmp(req.body.id,req.body.taskname,req.body.description,req.body.deadline,req.body.assignedprjct).then(result=>{
                
                    res.status(result.statusCode).json(result)
                })
                
                })

                server.get("/",cors(),(req,res)=>{

                })

                server.post("/",async(req,res)=>{
                    const{email,password}=req.body

                    try{
                        const check=await collection.findOne({email:email})
                        if(check){
                            res.json("exist")
                        }
                        else{
                            res.json("not exist")
                        }
                    }
                    catch(e){
                        res.json("not here")
                    }
                })
    
                server.post("/signup",async(req,res)=>{
                    const{email,password}=req.body

                    const data={
                        email:email,
                        password:password
                    }

                    try{
                        const check=await collection.findOne({email:email})
                        if(check){
                            res.json("exist")
                        }
                        else{
                            res.json("not exist")
                            await collection.insertMany([data])
                        }
                    }
                    catch(e){
                        res.json("not here")
                    }
                })
    
               
               




