import React from 'react';

const NoDataFound = (props) => {
    return (
        <div className="card card-body h-75 d-flex align-items-center justify-content-center">
            <h3>{props.text}</h3>
        </div>
    );
};

export default NoDataFound;
