import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import tm1 from '../image/tm1.jpg'
import tm2 from '../image/tm2.jpg'
import tm3 from '../image/tm3.jpg'
import tm4 from '../image/tm4.jpg'
import { PiTwitterLogoBold } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { SiMediamarkt } from "react-icons/si";
import { MdWorkspacesOutline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";




const About =() =>{
    const navigate = useNavigate()
    const change = () =>{
        navigate('/contact')
    }
    return(
        <>

        <section className="container-fuild">
            <div className="abtbg">
            <h1 className="bgh1">IT Solutions</h1>
            <h3 className="text-white">Providing Your Business With <br></br>A Quality IT Service is<br></br> Our Passion</h3>
                

            </div>

            <section className="container">
                    <div className="row text-center m-0 p-0">
                        <h2 className="text-center m-5">Our Expert Team</h2>
                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                <img src={tm1} alt='' className="img-fuild" width="100%" height="100%"></img>
                                </div>
                                <div class="card-footer">
                                <h4>Pratik Jain</h4>
                                    <p>Application Manager</p>
                                    <span className="icn"><PiTwitterLogoBold /></span>
                                    <span className="icn"><FiInstagram /></span>
                                    <span className="icn"><PiFacebookLogoBold /></span>
                                    <span className="icn"><PiLinkedinLogoBold /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                <img src={tm2} alt='' className="img-fuild" width="100%" height="100%"></img>
                                </div>
                                <div class="card-footer">
                                    <h4>Pratiksha Jain</h4>
                                    <p>Social Media</p>
                                    <span className="icn"><PiTwitterLogoBold /></span>
                                    <span className="icn"><FiInstagram /></span>
                                    <span className="icn"><PiFacebookLogoBold /></span>
                                    <span className="icn"><PiLinkedinLogoBold /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                <img src={tm3} alt='' className="img-fuild" width="100%" height="100%"></img>
                                </div>
                                <div class="card-footer">
                                <h4>Shyam Rathore</h4>
                                    <p>Content Writer</p>
                                    
                                    <span className="icn"><PiTwitterLogoBold /></span>
                                    <span className="icn"><FiInstagram /></span>
                                    <span className="icn"><PiFacebookLogoBold /></span>
                                    <span className="icn"><PiLinkedinLogoBold /></span>
                                   

                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                <img src={tm4} alt='' className="img-fuild" width="100%" height="100%"></img>
                                </div>
                                <div class="card-footer">
                                <h4>Payal Goyal</h4>
                                    <p>Business Manager</p>
                                    <span className="icn"><PiTwitterLogoBold /></span>
                                    <span className="icn"><FiInstagram /></span>
                                    <span className="icn"><PiFacebookLogoBold /></span>
                                    <span className="icn"><PiLinkedinLogoBold /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="container">
                <div className="row mt-5 m-0 p-0">

                    <h2 className="text-center m-5">Working Process</h2>

<div className="col-md-3">
    <div className="card cd1">

        <div className="card-body">
            <span className="sicon"><SiMediamarkt /></span>
            <h4>Discover</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
</div>
<div className="col-md-3">
    <div className="card cd1">
        <div className="card-body">
            <span className="sicon"><SiMediamarkt /></span>
            <h4>Design & Develop</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
</div>
<div className="col-md-3">
    <div className="card cd1">

        <div className="card-body">
            <span className="sicon"> <SiMediamarkt /></span>
            <h4>Install & Testing</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
</div>
<div className="col-md-3">
    <div className="card cd1">

        <div className="card-body">
            <span className="sicon"> <SiMediamarkt /></span>
            <h4>Project Delivery</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
</div>

</div>
                </section>

               
                <section className="mt-5 m-0 p-5 cont1">
                    <h2 className="m-5 h42">Let's Discuss your Projects</h2>
                    <p className="m-5">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your<br></br>
                        project needs with our team, we will get back asap</p>
                    <button type="button" onClick={change} className="btn btn-lg btn-primary">Contact Us</button>
                </section>
                <section class=" hch1">
                    <div className="row m-0 p-0">

                        <div className="col-md-4">
                            <span className="incc"><MdWorkspacesOutline /></span>
                            <h3>150+</h3>
                            <h4>Happy Clients</h4>
                        </div>
                        <div className="col-md-4">
                            <span className="incc"><GiProgression /></span>
                            <h3>350+</h3>
                            <h4>Completed Projects</h4>
                        </div>
                        <div className="col-md-4">
                            <span className="incc"><GiClockwork /></span>
                            <h3>453+</h3>
                            <h4>Hours Of Support</h4>
                        </div>
                    </div>
                </section>


                
            


            
        
       </section>
       <Footer/>
        
        </>
    )

}
export default About;