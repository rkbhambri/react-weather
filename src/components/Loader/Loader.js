import React from 'react';
import './Loader.css'

const Loader = (props) => {
    return (
        <div className="loader-wrapper d-flex" style={{ height: '70vh' }}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
