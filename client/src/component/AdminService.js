
import React, { useRef, useState, useContext } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { AuthContext } from "../store/auth.js";


const AdminService = () => {

    const[service_name, setService_name] = useState("")
    const[description, setDescription] = useState("")
    const[uploadFile, setUploadFile] = useState("")
    const file= useRef("");
     const {authorizationToken} = useContext(AuthContext)
    
    const addService = async (e) => {
        e.preventDefault()
            const data = new FormData()
            data.append('service_name',service_name)
            data.append('description',description)
            data.append('uploadFile',uploadFile)
            try{
                const dataToAdd = await fetch('http://localhost:9000/api/admin/services/post',{
                   
                    headers: {
                        authorization:authorizationToken
                    },
                    method: 'POST',
                    body: data

                })
                const res = await dataToAdd.json()
                console.log(res)
                setService_name("")
                setDescription("")
                file.current.value = ("")
            }

       catch(error) {
        console.log(error)

       }
    }
    
    return (
        <>

            <form className=" form d-block mx-auto p-5 servicefrm" onSubmit={addService} encType='multipart/form-data'>

                <div className="form-group">
                    <h2 className="m-3 text-center text-white sd">Add-Services</h2>
                    <label className="labletext">Name</label>
                    <input type="text" value={service_name}   onChange={(e) =>setService_name(e.target.value)} class="form-control"></input><br />
                    <label className="labletext">Description</label>
                    <input type="text" value={description}   onChange={(e) =>setDescription(e.target.value)} class="form-control"></input><br />
                    <label className="labletext">Image</label><br /><br />
                    <input  type="file"  ref={file}  onChange={(e) =>setUploadFile(e.target.files[0])} class="form-control"></input><br />
                    <button type="submit" class="btn btn-success btn-lg mx-auto d-block">SUBMIT</button>
                    

                </div>
            </form>


        </>
    )

}
export default AdminService;