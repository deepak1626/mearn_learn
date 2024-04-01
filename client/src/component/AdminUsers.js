import React, { useState, useEffect } from "react";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'


const AdminUsers = () => {
    const [id, setId]= useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    

    const [user, setUser] = useState([])

   /*  const [datadelete, setDatadelete] = useState("") */

    const getData = async () => {
        try {
            const data = await fetch('http://localhost:9000/api/admin/users')
            const res = await data.json()
            console.log(res)
            setUser(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    
    



    const singleuser = async (id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/user/${id}`)
            const res = await data.json()
            console.log(res)
            setId(res._id)
            setName(res.name)
            setEmail(res.email)
            setContact(res.contact)
        }
        catch (error) {
            console.log(error)
        }
    }

    const confirmDelete = async (id)=> {
        setId(id)

    }

    const deleteData = async (id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/user/delete/${id}`,{
                method: 'DELETE'
            })
            const res = await data.json()
            console.log(res)
            
            if(res.msg) {
                getData()
            }
            
           
        }
        catch (error) {
            console.log(error)
        }
    }

    
    
    const updateData = async () =>{
        try{
            const data = await fetch(`http://localhost:9000/api/admin/user/update/${id}`,{
               method:'PUT',
               body: JSON.stringify({name,email,contact}),
                headers:{
                  'Content-type':'application/json',
                   'Accept': 'application/json'
                }
            })
            const res = await data.json()
            console.log(res)
            getData()
        }
        catch(error){
            console.log(error)
        }
    }
    


    return (
        <>
            <table className="table table-bordered text-center">
                <thead className="">
                    <tr>
                        <th className="text-center">S.No</th>
                        <th className="text-center">NAME</th>
                        <th className="text-center ">EMAIL</th>
                        <th className="text-center">CONTACT</th>
                        <th className="text-center ">Action</th>
                    </tr>
                </thead>
                <div class="modal" id="myModal">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title text-dark">Edit</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form className="adfrm">
                                    <label className="lable ">Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control " placeholder="Name" id="text" name="name"></input> <br />
                                    <label className="lable">Email:</label>
                                    <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control " placeholder=" Email Address" id="email" name="email"></input> <br />
                                    <label className="lable">Contact:</label>
                                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" placeholder="Contact" id="text" name="contact"></input> <br />
                                   
                                </form>
                            </div>
                            <div class="modal-footer">
                               <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary" onClick={updateData} data-bs-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal md" id="myModal2">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                               
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                               <h4>Are you sure want to delete data ?</h4>
                            </div>
                           
                            <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancle</button><br></br>
                            <button type="button" onClick={() => deleteData(id)}  class="btn btn-success" data-bs-dismiss="modal">ok</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user.map((value, index) => {
                        return <tbody>
                            <tr>
                                <td className="text-center ">{index + 1}</td>
                                <td className="text-center">{value.name}</td>
                                <td className="text-center">{value.email}</td>
                                <td className="text-center">{value.contact}</td>
                                <td className="text-center" ><button className="btn btn-primary" onClick={() => singleuser(value._id)} data-bs-toggle="modal" data-bs-target="#myModal"> Edit </button>|
                                    <button className="btn btn-danger" data-bs-toggle="modal" onClick={() => confirmDelete(value._id)} data-bs-target="#myModal2">Delete</button>
                                </td>

                            </tr>
                        </tbody>
                    })
                }
            </table>
        
            
        </>
    )
}

export default AdminUsers;