import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Services from './component/Services';
import Error from './component/Error';
import Header from "./component/Header";
import AdminPage from "./layouts/AdminPage";
import AdminUsers from "./component/AdminUsers";
import AdminContact from "./component/AdminContact";
/* import Logout from "./component/Logout"; */
import AdminService from "./component/AdminService";
import AdminDeleteservice from "./component/AdminDeleteservice";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/logout' element={<Logout/>}></Route> */}
      

        <Route path='/admin' element={<AdminPage/>}>
        <Route path='users' element={<AdminUsers/>}></Route>
        <Route path='contact' element={<AdminContact/>}></Route>
        <Route path='service' element={<AdminService/>}></Route>
        <Route path='deleteservice' element={<AdminDeleteservice/>}></Route>

      </Route>
       
      <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter> 
      
     
      </>
   
  );
}

export default App;
