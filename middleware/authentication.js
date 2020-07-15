const jwt = require('jsonwebtoken')

const authenticate = (req, res, next)=>{
    try{
        const token=req.header.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'AZQ,PI')

        req.user = decode
        next()
    }
    catch(error){
            res.json({
                meaasage:'Authentication Failed!'
            })
    };
    
}
module.exports=authenticate