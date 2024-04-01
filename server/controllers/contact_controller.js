const contact = require('./../models/contactSchema')

const contactForm  = async (req, res) => {

    
    try {
        const { name, email, massage} = req.body
        if (!name || !email || !massage) {
            res.status(400).json('all fields are required')
        }
        else {
            const data = new contact({
                name: name,
                email: email,
                massage: massage
            })
            const contactData = await data.save()
            res.status(201).json(contactData)
        }
       
    }
    catch (error) {
        res.status(400).json('failed to send data')
    }


}
module.exports = contactForm
