const express    = require('express')
const mongoose   = require('mongoose')
const morgan     = require('morgan')
const bodyParser = require('body-parser')



const AuthRoute     = require('./server/routes/auth')

var mongodb='mongodb+srv://soham958:soham@1234@cluster0-ajolg.mongodb.net/ChatBotdb?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})


app.use('/api',AuthRoute)