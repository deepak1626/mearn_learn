import React, { useEffect, useState } from "react";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const Services = () => {
    const [services, setServices] = useState([])
    const getData = async () => {
        try {
            const data = await fetch('http://localhost:9000/api/data/service')
            const res = await data.json()
            console.log(res)
            setServices(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (


        <>
            <section>
                <div className="container">
                    <div className="row text-center align-items-center" >
                        <h3>Our Services</h3>
                        {
                            services.map((value) => {
                                return <div className="col-md-4 m-0 p-0 mt-5">
                                    <div class="card p-0 m-4">
                                        <div className=" card-body d-flex justify-content-around">
                                            <div>
                                            <img className="img" src={`http://localhost:9000/assets/${value.image}`} alt="" height="200px" width="100%"></img>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <h4> {value.service_name}</h4>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                  {/*   <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                            <h1 className="flcars">{value.service_name}</h1>
                                                <img className="img-thumbnail" src={`http://localhost:9000/assets/${value.image}`} alt="" height="250px" width="100%"></img>
                                                <p>{value.description}</p>
                                            </div>
                                            <div className="flip-card-back">
                                               
                                               
                                            </div>
                                        </div>
                                    </div> */}
                                    
                                </div>
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </section>

        </>
    )

}
export default Services;