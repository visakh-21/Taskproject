const db=require('./db')

const allEmployee=()=>{

 return db.Task.find().then(result=>{

        if(result){
            return{

                statusCode:200,
                employees:result
            }
        }
        else{

            return{

                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

const addEmployee=(id,taskname,description,deadline,assignedprjct)=>{
return db.Task.create().then(result=>{
if(result)
{

    return{

        statusCode:404,
        message:"employee already exist"

    }
}

else  
{
    const newEmp=new db.Task({  //create object of employee model for new employee
        id,
        taskname,
        description,
        deadline,
        assignedprjct

    })

    newEmp.save()  //save the object in db
    return{

        statusCode:200,
        message:"employee added sucessfully"
    }
}



})

}
const removeEmployee=(eid)=>{
  return db.Task.deleteOne({id:eid}).then(result=>{

        if(result){

            return{
                statusCode:200,


                message:"employee removed"

            }
        }
        else{

            return{
                statusCode:404,


                message:"employee not present"

            }
        }
    })


}

const getAnEmp=(id)=>{

  return  db.Task.findOne({id}).then(result=>{

        if(result)
        {
            return{

                statusCode:200,
                employee:result
            }
        }

        else{

            return{


                statusCode:404,
                message:"employee not present"
            }
        }
    })
}

const editEmp=(id,taskname,description,deadline,assignedprjct)=>{
    return db.Task.findOne({id}).then(result=>{


        if(result)
        {
result.id=id
result.taskname=taskname
result.description=description
result.deadline=deadline
result.assignedprjct=assignedprjct

result.save()
return{

    statusCode:200,
    message:'employee data updated'
}

        }

        else{


            return{

                statusCode:404,
                message:"employee not present"
            }
        }
    })
}


module.exports={

    allEmployee,addEmployee,removeEmployee,getAnEmp,editEmp
}
