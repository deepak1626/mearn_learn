import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { toast } from 'react-toastify'
import Footer from "./Footer.js";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [massage, setMassage] = useState("")

    const putData = async (e) => {
        e.preventDefault()

        try {
            const data = await fetch('http://localhost:9000/api/form/contact', {
                method: 'POST',
                body: JSON.stringify({name, email, massage}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })



            const res = await data.json()
            console.log(res)
            
            if (!name || !email || !massage) {
                toast.error('All fields are required');
            }
            else {
                
                toast.success('You Are message send Successfully');
            }
            setName('')
            setEmail('')
           setMassage('')

            
        }

        catch (error) {
            console.log(error)
        }
    }



    return(
        <>
         
         <form onSubmit={putData} className="form d-block mx-auto cnt">
                        <h2 className="text-center mt-5 text-danger">---Contact Us---</h2>
                    <div class="form-group p-3">                        
                        <label className="labletext">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control"></input><br/>
                        <label  className="labletext">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control"></input><br/>
                        <label className="labletext">Massage</label><br/><br/>
                        <textarea value={massage} onChange={(e) => setMassage(e.target.value)} className="msg" name="text" placeholder="Write something.."></textarea>                       
                        <button type="submit" class="btn btn-center mb-0 btn-danger text-white btnlg">Submit</button><br/><br/>                        
                        </div>
                     </form>

                     <div>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.435721451237!2d75.8714191!3d22.6869885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4ee30b14f%3A0xcfc953cb64216669!2sBitByte%20Software%20Technology!5e0!3m2!1sen!2sin!4v1709210953915!5m2!1sen!2sin" width="100%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>

                    {/* <section>
                    <div className="row m-0 ">
                        <div className="col-md-6">
                        <form onSubmit={putData} className="form d-block mx-auto cnt">
                        <h2 className="text-center mt-5 text-danger">---Contact Us---</h2>
                    <div class="form-group p-3">                        
                        <label className="labletext">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control"></input><br/>
                        <label  className="labletext">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control"></input><br/>
                        <label className="labletext">Massage</label><br/><br/>
                        <textarea value={massage} onChange={(e) => setMassage(e.target.value)} className="msg" name="text" placeholder="Write something.."></textarea>                       
                        <button type="submit" class="btn btn-center mb-0 btn-danger text-white btnlg">Submit</button><br/><br/>                        
                        </div>
                     </form>
                        </div>
                        <div className="col-md-6">
                        <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14724.435721451237!2d75.8714191!3d22.6869885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4ee30b14f%3A0xcfc953cb64216669!2sBitByte%20Software%20Technology!5e0!3m2!1sen!2sin!4v1709210953915!5m2!1sen!2sin" width="100%" height="500px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     
                        </div>

                    </div>
                    </section> */}
                    <Footer/>
        
        </>
    )

}
export default Contact;