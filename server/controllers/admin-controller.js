const user = require('./../models/userSchema')
const contact = require('./../models/contactSchema')
const service = require('./../models/serviceSchema')


const path = require('path');
const filePath = path.join(__dirname, '..', 'assets');
const fs = require('fs');



const getAllusers = async(req, res)=>{
    try {
        const userData = await user.find()
        if(!userData||userData.length === 0){
            return res.status(404).json({msg: 'no data found'})
        }
        else {
            return res.status(200).json(userData)
        }
    }
    catch (error){
        res.status(500).json({msg: 'interal server error'})
    }
}

const getAllcontacts = async(req, res)=>{
    try {
        const contactData = await contact.find()
        if(!contactData||contactData.length === 0){
            return res.status(404).json({msg: 'no data found'})
        }
        else {
            return res.status(200).json(contactData)
        }
    }
    catch (error){
        res.status(500).json({msg: 'interal server error'})
    }
}

const getSingleUser =async(req,res) => {
    const id =req.params.id
     try{
        const data = await user.findOne({_id: id})
        if(!data){
            res.status(400).json({error:'No User Found'})
        }
        else{
            res.status(200).json(data)
        }
     }
     catch(error){
        res.status(500).json({msg:'Internal Server Error'})
     }
       
}
const deleteOneuser =async (req,res) => {
    
     try{
        const id =req.params.id
         await user.deleteOne({_id: id})
        
            res.status(200).json({msg: 'user deleted'})
        
     }
     catch(error){
        res.status(500).json({msg:'Internal Server Error'})
     }
       
}

const updateOne = async (req, res) => {
    try{
        const id =req.params.id
        const updateData = req.body
        await user.updateOne({_id: id}, {$set: updateData})
        
            res.status(200).json({msg: 'user updated'})
        
     }
     catch(error){
        res.status(500).json({msg:'Internal Server Error'})
     }
}

const deleteonecontact =async (req,res) => {
    
    try{
       const id =req.params.id
        await contact.deleteOne({_id: id})
       
           res.status(200).json({msg: 'user deleted'})
       
    }
    catch(error){
       res.status(500).json({msg:'Internal Server Error'})
    }
      
}

const addServices = async (req,res) => {
    try {
        const {service_name,description} = req.body
        const { uploadFile } = req.files
        console.log(uploadFile)
        if (!service_name || !description ) {
            res.status(400).json({msg:'all fields are required'});
        }
        else{
            uploadFile.mv(path.join(filePath, uploadFile.name))
            const addService = new service({
                  service_name,
                  description,
                    image: uploadFile.name
            })
            const serviceadded = await addService.save()
            res.status(200).json({msg:'serviceadded'})
        }
    }
    catch (error) {
        res.status(400).json({msg:'failed to add services'})
       /*  console.log(error); */
    }
    
}

const deleteservice =async (req,res) => {
    
    try{
       const id =req.params.id
       const data = await service.findById(id);

       if (!data){
        return res.status(400).json('data not found');
       }

       const filePath = path.join(__dirname, '..', 'assets', data.image);
       if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
       }
       await service.findByIdAndDelete(id);

       res.status(200).json({msg :'data and file deleted'});

        
       
       
           
       
    }
    catch(error){
       res.status(500).json({msg:'Internal Server Error'})
    }
      
}


module.exports = {getAllusers, getAllcontacts,  getSingleUser, deleteOneuser, updateOne, deleteonecontact, addServices, deleteservice}

 