const jwt = require('jsonwebtoken')
const user = require('./../models/userSchema')
const contact = require('./../models/contactSchema')
const service = require('./../models/serviceSchema')


const varifyToken = async (req, res, next) => {

    let token = req.headers['authorization'];
    // console.log(token)

    if (!token) {
        return res.status(400).json({ msg: 'a token is required for Authontication' })
    }

    try {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            console.log(token)


        }
        const verifyed = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const data = await user.findOne({_id: verifyed.id})

        req.user = data

        next();
    }
    catch (error) {
        res.status(400).json({ msg: 'Invailid token' })

    }






}






module.exports = varifyToken