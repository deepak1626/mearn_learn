import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { NavLink } from "react-router-dom";
import pic from '../image/dn.jpg'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";




const Footer =() =>{
    return(
        <>

        <section className="container-fuild">
            <div className="ftr">
                <div className="row m-0 p-0">
                    <div className="col-md-3">
                    <img src={pic} alt='' className=" m-2 img-fuild rounded-circle" width="75px" height="48px"></img>
                    <h5 className="ftrh3">Aks_me</h5>
                    <p className="text-white">Lets make step forword to make<br></br> something new</p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="ftrh3">Useful Links</h5>
                        <ul className="navbar-nav m-0 p-0">
        
     
        <li className="nlinkf"><NavLink to="/">Home</NavLink></li>
        <li className="nlinkf"><NavLink to="/About">About</NavLink></li>
        <li className="nlinkf"><NavLink to="/Services">Services</NavLink></li>
        <li className="nlinkf"><NavLink to="/Contact">Contact</NavLink></li>
        </ul>

                    </div>

                    <div className="col-md-3">
                        <h5 className="mb-5 ftrh3">Follow_US</h5>
                      {/*  
                        <li className="nlink"><NavLink to=""></NavLink></li>
                        <li className="nlink"><NavLink to=""></NavLink></li>
                        <li className="nlink"><NavLink to=""></NavLink></li>
                        <li className="nlink"><NavLink to=""></NavLink></li> */}

                       
                                    <span className="ic"><GrInstagram /></span>
                                    <span className="ic"><FaFacebookSquare /></span>
                                    <span className="ic"><TbBrandWhatsapp /></span>
                                    <span className="ic"><TbBrandLinkedin /></span>
                                    <h6 className="text-white m-2">Follow Us On Various Plateform</h6>

                        
                    </div>

                    <div className="col-md-3">
                        {/* <h3 className="ftrh3">Contact_US</h3>
                        <h6 className="text-white m-4">+91 7853282453</h6>
                        <h6 className="text-white m-4">gmail12@gmail.com</h6>
                        <h6 className="text-white m-4">BhavarKua Indore M.P.</h6> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.459163144496!2d75.8714587!3d22.6867703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde8566a3b65%3A0x5ce04a9c3b185ded!2sAtulya%20IT%20Park!5e0!3m2!1sen!2sin!4v1712813655423!5m2!1sen!2sin"  width="300px" height="250px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <hr className="text-white"></hr>
                    <h6 className="text-center text-white">&copy;All Rights reserved 2024 Designed & Devloped By <span className="text-warning">Deepak Rathod </span></h6>

        
                </div>

            </div>
             </section>
        
        </>
    )

}
export default Footer;