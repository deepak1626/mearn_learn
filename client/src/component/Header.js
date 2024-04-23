import React, { useContext} from "react";
import pic from '../image/dn.jpg'
import '../App.css'
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import { AuthContext } from "../store/auth";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
const Header = () => {
    
    const {isLoggedIn, LogoutUser} = useContext(AuthContext)
   
    
    return (
        <>



<nav className="navbar navbar-expand-sm navbar-danger bgclr">
  <div className="container-fluid">
    
    <img src={pic} alt='' className=" m-2 img-fuild rounded-circle" width="75px" height="48px"></img>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav m-0 p-0">
        
     
                            <li className="nlink"><NavLink to="/">Home</NavLink></li>
                            <li className="nlink"><NavLink to="/About">About</NavLink></li>
                            <li className="nlink"><NavLink to="/Services">Services</NavLink></li>
                            <li className="nlink"><NavLink to="/Contact">Contact</NavLink></li>

                            {
                                isLoggedIn ?  <li onClick={LogoutUser} className="nlink text-white">Logout</li>
                                :  <>
                                  <li className="nlink"><NavLink to="/Login">Login</NavLink></li>
                            <li className="nlink"><NavLink to="/Register">Register</NavLink></li> 

                                </>
                            }
          
      </ul>
    </div>
  </div>
</nav>
            {/* <div className="container-fuild m-0 p-0">
                <div className="row m-0">
                    <div className="col-md-12 p-0 m-0">
                        <ul className="nbar">
                        <li className=""><NavLink to="/">
                        <img src={pic} alt='' className=" m-2 img-fuild rounded-circle" width="65px" height="48px"></img>
                            </NavLink></li>
                            <li className="nlink"><NavLink to="/">Home</NavLink></li>
                            <li className="nlink"><NavLink to="/About">About</NavLink></li>
                            <li className="nlink"><NavLink to="/Services">Services</NavLink></li>
                            <li className="nlink"><NavLink to="/Contact">Contact</NavLink></li>

                            {
                                isLoggedIn ?  <li className="nlink"><NavLink to="/Logout">Logout</NavLink></li>
                                :  <>
                                  <li className="nlink"><NavLink to="/Login">Login</NavLink></li>
                            <li className="nlink"><NavLink to="/Register">Register</NavLink></li> 

                                </>
                            }
          

                           
                          
                        </ul>
                    </div>

                   
                </div>
            </div>

 */}


        </>

    )

}
export default Header;