import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Context } from '../../utilities/Context';
import Footer from '../Footer/Footer';

const Layout = () => {
    const [context, setContext] = useState("context");

    return (
        <Context.Provider value={[context, setContext]}>
            <div>
                <Outlet />
            </div>
            <Footer />
        </Context.Provider>
    );
};

export default Layout;