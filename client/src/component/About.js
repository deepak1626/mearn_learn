import React from "react";
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic1 from '../image/1.jpg'
import pic2 from '../image/2.jpg'
import pic3 from '../image/3.jpg'
import pic4 from '../image/4.jpg'
import pic5 from '../image/5.jpg'
import pic6 from '../image/6.jpg'
import pic7 from '../image/7.jpg'
import pic8 from '../image/8.jpg'
import pc from '../image/header.jpg'





const About =() =>{
    return(
        <>

        <section className="container-fuild">


            
            <section>
                    <div>
                        <img src={pc} alt='' className="img-fuild img-responsive" width="100%" height="600px"></img>
                        </div>
                    <div className="rel">
                        <p className="t">WelCome</p>
                        <h1 className="tt">SUMMER <br></br> COLLECTION</h1>
                    </div>
                </section>

      
         <div className="container mr">
            
       <div className="row m-0 p-0">
        <h1 className="text-center">Our Collection</h1>
        <div className="col-md-3">
        <img src={pic1} alt='' className="img-fuild  img-thumbnail" height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic2} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic3} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic4} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        

       </div>
       <div className="row mt-4">
        <div className="col-md-3">
        <img src={pic8} alt='' className="img-fuild  img-thumbnail" height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic7} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic6} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        <div className="col-md-3">
        <img src={pic5} alt='' className="img-fuild img-thumbnail"  height="300px"></img>
        </div>
        

       </div>
       </div>

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
export default About;