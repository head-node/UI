import React from 'react';
import BasicDetails from "../Application/BasicDetails"
function index(props) {
    return (
        <div> 
            <h3 style={{display:"flex",justifyContent:"flex-end"}}>Credit Score</h3>
            <BasicDetails/>
        </div>
    );
}

export default index;