import React from "react";

import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import pic from '../image/tt.jpg'





const Home = () => {
    return (
        <>
            <section className="container-fuild">
               
                <section>
                    <div>
                        <img src={pic} alt='' className="img-fuild img-responsive" width="100%" height="600px"></img>
                        </div>
                    <div className="rel">
                        <p className="t">WelCome</p>
                        <h1 className="tt">SUMMER <br></br> COLLECTION</h1>
                    </div>
                </section>
                <section className="mr">
                    <div className="container">
                        <h1 className="text-center">SUMMER SALE STARTS IN</h1>
                        <div className="row mt-5">
                            <div className="col-md-3 "><h1 class="grad1 p-5 text-white">00
                                <hr></hr>
                                <span>Days</span></h1></div>
                            <div className="col-md-3 "><h1 class="grad1 p-5 text-white">00
                                <hr></hr>
                                <span>Hours</span></h1></div>
                            <div className="col-md-3 "><h1 class="grad1 p-5 text-white">00
                                <hr></hr>
                                <span>Minutes</span></h1></div>
                            <div className="col-md-3 "><h1 class="grad1 p-5 text-white">00
                                <hr></hr>
                                <span>Seconds</span></h1></div>

                        </div>
                    </div>

                </section>
                <section>
                    <div className="dd">
                        <h1 className="kk">PURCHASE OUR SUMMER <br></br> COLLECTION</h1>
                        <p className="wh">Web Design HTML Templates</p>

                        <center>
                            <button type="button" className="btn btn-light p-3 m-5 ">PURCHASE NOW</button>
                            <button type="button" className="btn btn-light p-3 m-5">MORE DISCOU</button>
                        </center>
                    </div>
                </section>

              <div className="row bg-dark text-white m-0 p-0 pt-5">
                <div className="col-md-3">
                <h4 className="">Company</h4>
                <ol>
                    <li className="flist"><NavLink  to="/">About us</NavLink></li>
                    <li className="flist"><NavLink  to="/">Our Servises</NavLink></li>
                    <li className="flist"><NavLink  to="/">Privacy & Policy</NavLink></li>
                    <li className="flist"><NavLink  to="/">Affiliate Program</NavLink></li>
                   
                </ol>
                </div>
                <div className="col-md-3">
                <h4 className="borderb">Get Help</h4>
                <ol>
                    
                    <li className="flist"><NavLink  to="/">Shipping</NavLink></li>
                    <li className="flist"><NavLink  to="/">Returns</NavLink></li>
                    <li className="flist"><NavLink  to="/">Order Status</NavLink></li>
                    <li className="flist"><NavLink  to="/">Payment option</NavLink></li>
                   
                </ol>
                </div>
                <div className="col-md-3">
                <h4 className="">Online shop</h4> 
                <ol>
                    <li className="flist"><NavLink  to="/">Watch</NavLink></li>
                    <li className="flist"><NavLink  to="/">Bag</NavLink></li>
                    <li className="flist"><NavLink  to="/">Shoes</NavLink></li>
                    <li className="flist"><NavLink  to="/">Dress</NavLink></li>
                   
                </ol>
                </div>
                <div className="col-md-3">
                <h4 className="borderb">Contact Us</h4>
                <ol>
                    <li className="flist"><NavLink  to="/">SUMMER COLLECTION</NavLink></li>
                    <li className="flist"><NavLink  to="/">rathoddeepak887@gmail.con</NavLink></li>
                    <li className="flist"><NavLink  to="/">+91 7772809661</NavLink></li>
                    <li className="flist"><NavLink   to="/">Bhavarkua indore</NavLink></li>
                   
                </ol>
                </div>

              </div>
       
              
            </section>

        </>
    )

}
export default Home;