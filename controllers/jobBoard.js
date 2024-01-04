const jobBoard = require('../models/jobBoard')

module.exports = {
    getjobBoard: async (req,res)=>{ 
        try{
            const todoItems = await jobBoard.find()
            const itemsLeft = await jobBoard.countDocuments({completed: false})
            res.render('jobBoard.ejs', {jobBoard: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createjobBoard: async (req, res)=>{
        try{
            await jobBoard.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/jobBoard')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await jobBoard.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await jobBoard.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deletejobBoard: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await jobBoard.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted job')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    