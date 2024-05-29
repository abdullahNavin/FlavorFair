import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainRouter = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRouter;