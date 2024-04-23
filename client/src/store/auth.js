import {useEffect, createContext, useState } from "react";
const AuthContext = createContext()


const AuthProvider =  ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token'))
    const authorizationToken = `Bearer ${token}`

    const [user, setUser] = useState("")

    const [isLoading, setIsLoading] = useState(true)

    const storageTokenls = (serverToken) => {
         localStorage.setItem('token', serverToken);
        setToken(serverToken)

    }

   

     const LogoutUser = () =>{
        setToken("")
         return localStorage.removeItem('token')
     } 

     /* jwt  - authontication to get curreently loggdin user  data */

     const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const data = await fetch('http://localhost:9000/api/auth/user',{
                headers:{
                    authorization: authorizationToken
                }
            })
            const res = await data.json()
            console.log(res)
            setUser(res)
            setIsLoading(false)

        }
        catch(error){
            console.log(error)
        }

      
     }
     useEffect(() =>{
        userAuthentication()
       },[])

     let isLoggedIn = !!token
     console.log('Login', isLoggedIn)
     


    return <AuthContext.Provider value={{storageTokenls, LogoutUser, user, authorizationToken, isLoggedIn, isLoading}}>
        {children}
    </AuthContext.Provider>
}
export {AuthContext, AuthProvider}