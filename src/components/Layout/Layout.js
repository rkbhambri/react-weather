import React from 'react';
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <div className="layout h-100">
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
