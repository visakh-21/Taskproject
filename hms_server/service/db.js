const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task')

//model

const Task = mongoose.model('Task', {


    id: String,
    taskname: String,
    description: String,
    deadline: String,
    assignedprjct: String


})

module.exports = {

    Task
}
