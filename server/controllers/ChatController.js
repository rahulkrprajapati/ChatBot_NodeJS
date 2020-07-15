const ChatHistory   = require('../models/ChatHistory')


const registerChat = (req, res, next) => {
  
        let chat = new ChatHistory ({
            name: req.body.name,
            email: req.body.email,
            budget: req.body.budget,
            class: req.body.class,
            color: req.body.color,
            engine: req.body.engine,
            carChecked: req.body.carChecked,
            delivery: req.body.delivery,
        })
    
        chat.save()
        .then(chat => {
            res.json({
                message: 'Chat Added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

const updateChat = (req,res,next ) => {
    let useremail = req.body.email

    let updatedData = {
        name: req.body.name,
        budget: req.body.budget,
        class: req.body.class,
        color: req.body.color,
        engine: req.body.engine,
        carChecked: req.body.carChecked,
        delivery: req.body.delivery,
    }

    ChatHistory.findOneAndUpdate({email:useremail}, {
        name: req.body.name,
        budget: req.body.budget,
        class: req.body.class,
        color: req.body.color,
        engine: req.body.engine,
        carChecked: req.body.carChecked,
        delivery: req.body.delivery,})
    .then(() => {
        res.json({
            message: 'Chat History updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'update error Occured!'
        })
    })
}

const showChat=(req,res,next)=>{
    ChatHistory.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}

module.exports = {
    registerChat, updateChat, showChat
}

