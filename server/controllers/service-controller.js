const  service = require('./../models/serviceSchema')

const services = async (req, res) =>{
try {
    const getData = await service.find()
    if(!getData){
        res.status(400).json({msg: 'no service found'})
    
    }
    else{
        res.status(200).json(getData)
    }
}
catch{
    res.status(500).json({msg: 'internal server '})
}
}

module.exports = services
