import React, { useContext, useState } from "react";
import img from '../image/reg.avif'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { AuthContext } from "../store/auth";
import { toast } from 'react-toastify'

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirm_password: ""

    })
    const { storageTokenls } = useContext(AuthContext)


    const handeleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [name]: value

        })
    }

    const sendData = async (e) => {
        e.preventDefault()

        try {
            const data = await fetch('http://localhost:9000/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })



            const res = await data.json()
            console.log(res)

            const { name, email, contact, password, confirm_password } = user
            if (!name || !email || !contact || !password || !confirm_password) {
                toast.error('All fields are required');
            }
            else {
                if (password !== confirm_password) {
                    toast.error('Password  is not same');
                }
                else {
                    storageTokenls(res.token)
                    toast.success('You Are Registered Successfully');
                    setUser({
                        name: '',
                        email: '',
                        contact: '',
                        password: '',
                        confirm_password: ''
                    })
                }
            }





            storageTokenls(res.token)
            setUser({
                name: '',
                email: '',
                contact: '',
                password: '',
                confirm_password: ''

            })
        }

        catch (error) {
            console.log(error)
        }

    }


    return (
        <>

            <div className="container m-4 mx-auto d-block" >
                <div className="row m-0">
                    <div className="col-md-6">
                        <form className="form frm" onSubmit={sendData}>
                            <h3 className="text-center text-danger">--Registration--</h3>
                            <div class="form-group p-3">
                                <label className="labletext">Name</label>
                                <input value={user.name} name="name" onChange={handeleInput} type="text" className="form-control"></input><br />
                                <label className="labletext">Email</label>
                                <input value={user.email} name="email" onChange={handeleInput} type="email" className="form-control"></input><br />
                                <label className="labletext">Contact</label>
                                <input value={user.contact} name="contact" onChange={handeleInput} type="text" className="form-control"></input><br />
                                <label className="labletext">Password</label>
                                <input value={user.password} name="password" onChange={handeleInput} type="password" className="form-control"></input><br />
                                <label className="labletext">Confirm_password</label>
                                <input value={user.confirm_password} name="confirm_password" onChange={handeleInput} type="password" className="form-control"></input><br />
                                <button type="submit" className="btn btn-lg btn-center mb-0 btn-danger mx-auto d-block text-white btnrg">Sign Up </button><br /><br />
                            </div>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <img src={img} alt='' className="img-fuild" width="100%" height="100%"></img>
                    </div>
                </div>

            </div>

        </>
    )

}
export default Register;