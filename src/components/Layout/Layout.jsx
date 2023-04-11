import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Context } from '../../utilities/Context';


const Layout = () => {
    const [context, setContext] = useState("context");

    return (
        <Context.Provider value={[context, setContext]}>
            <div>
                <Outlet />
            </div>
        </Context.Provider>

    );
};

export default Layout;