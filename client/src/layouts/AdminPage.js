import React, { useContext } from "react";
import '../App.css'
import { NavLink, Navigate, Outlet } from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { AuthContext } from "../store/auth.js";

const AdminPage =() =>{

    const {user, isLoading} = useContext(AuthContext)
    console.log('admin page', user)


    if(isLoading){
        return<h1>loading...</h1>
    }

    if(!user.isAdmin){
        return<Navigate to="/" />
    }



   /*  if(!user.isAdmin){

    } */

    return(
        <>
        <div className="adminrw">
         <div className="row m-0 p-5">
            <div className="col-md-3 m-0 p-0">
       <ul className="adminl">
        <li className="adminlist"><NavLink to="/admin/users">Users</NavLink></li>
        <li className="adminlist"><NavLink to="/admin/contact">Contact</NavLink></li>
        
        <div class="dropdown">
        <li className="dropdown-toggle adminlist"   data-bs-toggle="dropdown">Services</li>
        <div class="dropdown-menu ad">
      <li class="dropdown-item"><NavLink className="ad" to="/admin/service">Add service</NavLink></li>
      <li class="dropdown-item"><NavLink className="ad"  to="/admin/deleteservice">Delete service</NavLink></li>
     
    </div>
    </div>
        

        <li className="adminlist"><NavLink to="/">Home</NavLink></li>
        
       </ul>
       </div>
      
       <div className="col-md-9 m-0 p-0">
        <Outlet/>
       </div>
       </div>

       </div>
        
        </>
    )

}
export default AdminPage;