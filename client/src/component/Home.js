import React from "react";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


import pic from '../image/888.jpg'
import tm1 from '../image/tm1.jpg'
import tm2 from '../image/tm2.jpg'
import tm3 from '../image/tm3.jpg'
import tm4 from '../image/tm4.jpg'


import { HiOutlineLightBulb } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { SiMediamarkt } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineDataset } from "react-icons/md";
import { MdWorkspacesOutline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Footer from "./Footer";
import sample from '../image/vid.mp4'






const Home = () => {
    const navigate = useNavigate()
    const change = () => {
        navigate('/contact')
    }
    return (
        <>
            <section className="container-fuild">


                {/*   <div className="bg">
                    <h1 className="bgh1">IT Solutions</h1>
                    <p className="bgp">You can easily change any design to your own. <br></br>It is also highly customizable SEO friendly template</p>

                </div> */}


                <video className='videoTag' width="100%" autoPlay loop muted >
                    <source src={sample} type='video/mp4' />
                </video>

                <div className="container">
                    <div className="row mt-5 m-0 p-0">

                        <div className="col-md-4">
                            <div className="card cd1">

                                <div className="card-body">
                                    <span className="sicon"> <HiOutlineLightBulb /></span>
                                    <h4>Application Design</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cd1">
                                <div className="card-body">
                                    <span className="sicon"><CgWebsite /></span>
                                    <h4>Web Hosting</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cd1">

                                <div className="card-body">
                                    <span className="sicon"> <SiMediamarkt /></span>
                                    <h4>Social Media</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row mt-5 m-0 p-0">

                        <div className="col-md-4">
                            <div className="card cd1">

                                <div className="card-body">
                                    <span className="sicon"> <TiCloudStorageOutline /></span>
                                    <h4>Cloud Server</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card cd1">
                                <div class="card-body">
                                    <span className="sicon"> <MdOutlineDataset /></span>
                                    <h4>Data Security</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card cd1">

                                <div class="card-body">
                                    <span className="sicon"> <FaNetworkWired /></span>
                                    <h4>SEO Optimazation</h4>
                                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <section className="container">
                    <div className="row m-0 p-0">
                        <h2 className="text-center m-5">Why Choose Us</h2>
                        <div className="col-md-4 text-end">
                            <h3 className="">Experience</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Products</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Approach</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={pic} alt='' className="img-fuild" width="100%" height="100%"></img>
                        </div>
                        <div className="col-md-4">
                            <h3>Pricing</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Delivery</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Support</h3>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>


                    </div>
                </section>

                <section class=" hch">
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

                <section className="container">
                    <div className="row text-center m-0 p-0">
                        <h2 className="text-center m-5">Our Team</h2>
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


                <section className="mt-5 m-0 p-5 cont">
                    <h2 className="m-5 h42">Let's Discuss your Projects</h2>
                    <p className="m-5">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your<br></br>
                        project needs with our team, we will get back asap</p>
                    <button type="button" onClick={change} className="btn btn-lg btn-primary">Contact Us</button>
                </section>





                <Footer />




























            </section>

        </>
    )

}
export default Home;