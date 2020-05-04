import React from 'react';

const NoDataFound = (props) => {
    return (
        <h2 className="h-75 d-flex align-items-center justify-content-center">
            {props.text}
        </h2>
    );
};

export default NoDataFound;
