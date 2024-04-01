import React, { useEffect, useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const AdminContact =() =>{
    const [contact, setContact] = useState([])
    const [id, setId] = useState("")

    const confirmDelete = async (id)=> {
        setId(id)

    }
    const deleteData = async (id) => {
        try {
            const data = await fetch(`http://localhost:9000/api/admin/contact/delete/${id}`,{
                method: 'DELETE'
            })
            const res = await data.json()
            console.log(res)
            /* setDatadelete(res) */
            if(res.msg) {
                getData()
            }
            
           
        }
        catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {

    try {
        const data = await fetch('http://localhost:9000/api/admin/contact')
        const res = await data.json()
        console.log(res)
        setContact(res)
       
    }
    catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    getData()
}, [])
    return(
        <>
         
         <table className="table table-bordered text-center">
              <thead>
                    <tr>
                       <th>Sno.</th>
                       <th className="text-center">Name</th>
                       <th className="text-center ">Email</th>
                       <th className="text-center ">massage</th>
                       <th className="text-center ">Action</th>
                    </tr>
                    
                </thead> <div class="modal md" id="myModal2">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                               
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                               <h4>Are you sure want to delete ?</h4>
                            </div>
                           
                            <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancle</button><br></br>
                            <button type="button" onClick={() => deleteData(id)}  class="btn btn-success" data-bs-dismiss="modal">ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    contact.map(( value, index) => {
                        return<tbody> 
                            <tr>
                               <td className="text-center">{index + 1}</td>
                               <td className="text-center">{value.name}</td>
                               <td className="text-center ">{value.email}</td>
                               <td className="text-center">{value.massage}</td>
                              
                               <td className="text-center" >
                                <button className="btn btn-danger"  data-bs-toggle="modal" onClick={() => confirmDelete(value._id)} data-bs-target="#myModal2">Delete</button></td>
                            </tr>
                        </tbody>
                    })  
                }
            </table> 
        
        </>
    )

}
export default AdminContact;