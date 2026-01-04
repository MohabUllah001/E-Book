import React from 'react';
import NavBar from '../Components/NavBar/navBar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
          <NavBar/>
          <Outlet/>
          <Footer/>

        </div>
        
    );
};

export default Root;