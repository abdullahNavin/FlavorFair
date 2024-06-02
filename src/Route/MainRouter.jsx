import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Headroom from 'react-headroom';
import Footer from '../Components/Footer';

const MainRouter = () => {
    return (
        <div>
            <Headroom>
                <Navbar></Navbar>
            </Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRouter;