import React from "react";
import pic from '../image/404.png'



const Error =() =>{
    return(
        <>

<div className="errr">
<img src={pic} alt='' className="img-fuild mx-auto d-block m-5" ></img>
<h1 className="text-center text-danger">--404--<br></br> Page Note Found</h1>
</div>
   

        
        </>
    )

}
export default Error;