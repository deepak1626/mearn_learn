import React, { useContext, useState } from "react";
import pic from '../image/log.avif'
import { AuthContext } from "../store/auth";
import { toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {storageTokenls} = useContext(AuthContext)

    const sendData = async (e) => {
        e.preventDefault()

        try {
            const data = await fetch('http://localhost:9000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })



            const res = await data.json()
            console.log(res)
            if (!email || !password) {
                toast.error('All fields are required');
            }
                           else {
                            storageTokenls(res.token)
                   toast.success('You are login successfully');

                   setEmail("")
                  setPassword("")
                }
            
        
            storageTokenls(res.token)
            setEmail('')
            setPassword('')
            
        }

        catch (error) {
            console.log(error)
        }
    }

    return (

        <>

            <div className="container mx-auto d-block">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={pic} alt='' className="img-fuild" width="100%" height="100%"></img>
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={sendData} className="form d-block mx-auto lg-frm">
                            <h3 className="text-center text-danger">Welcome</h3>
                            <div class="form-group p-3">
                                <label className="labletext">---Email---</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="form-control"></input><br />
                                <label className="labletext">---Password---</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control"></input><br />
                                <button type="submit" className="btn btn-center mb-0 btn-danger text-white btnlg">Login</button><br /><br />
                            </div>
                        </form>

                    </div>

                </div>


            </div>

        </>
    )

}

export default Login;