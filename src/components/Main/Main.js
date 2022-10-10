import React from 'react';
import Menubar from '../Menubar/Menubar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;