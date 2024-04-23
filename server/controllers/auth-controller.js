const user = require('./../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/* const register = async (req, res) => {
    try{
        const data = new user({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            confirm_password: req.body.confirm_password 

        })
        const userCreated = await data.save()
        res.status(201).json(userCreated)

              
        

 
    }
    catch(error){
        res.status(400).json('faild to send the data')
    }
    
} */

const register = async (req, res) => {

    
    try {
        const { name, email, contact, password, confirm_password } = req.body
        if (!name || !email || !contact || !password || !confirm_password) {
            res.status(400).json('all fields are required')
        }
        else {
            const emailExist = await user.findOne({ email: email })
            if (emailExist) {
                res.status(400).json('this mail is already exist')
            }
            else {
                if (password !== confirm_password) {
                    res.status(400).json('password not match')

                }
                

                else {
                    const hashedPass = await bcrypt.hash(password, 10)
                    const data = new user({
                        name: name,
                        email: email,
                        contact: contact,
                        password: hashedPass,
                        confirm_password: confirm_password
                    })
                    const userCreated = await data.save()

                    const storedData = await user.findOne({ email: email })
                    const token = jwt.sign({ id: storedData._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                    res.status(201).json({ msg: userCreated, "token": token })


                }

            }
        }
    }
    catch (error) {
        res.status(400).json('failed to send data')
    }


}

const login = async (req, res) => {
    try {
        const { email, password} = req.body
        if (email && password){
            const userExist = await user.findOne({email: email})
        
        if(userExist) {
            const isMatch = await bcrypt.compare(password, userExist.password)
            if((userExist.email === email) && isMatch){
                const token = jwt.sign({id: userExist._id}, process.env.JWT_SECRET_KEY,{expiresIn: '5d'})
                res.status(200).json({msg: 'you have logged in successfully', token: token })
            }
            else {
                res.status(400).json({msg: 'email or password id not valid'})
            }
        }
        else {
            res.status(400).json({msg: 'you are not a register user'})
        }
    }
        else {
            res.status(400).json({msg: 'all field are requred'})
        }
        
        
    }
    catch(error){
        console.log(error)
        res.status(400).json({msg: 'unable to login'})
    }
}

const getUser = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData)
        return res.status(200).json(userData)
    }
    catch{
        res.status(500).json({msg : 'unable to find data'})
    }
}

module.exports = {register, login, getUser} 