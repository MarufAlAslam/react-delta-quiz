import React from 'react';
import Menubar from '../Menubar/Menubar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;