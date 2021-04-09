import React from 'react';

const index=(props)=> {
    return (
        <div className="loan_app" style={{display: 'flex', flexDirection: 'column',justifyContent: "flex-start"}}>
        <h2 style={{}}>LOAN APPLCATION</h2> 
        <div style={{display: 'flex'}}>
            <p style={{textAlign:"center"}}>Application 1</p> 
            <div>
                <p>Loan id:</p> 
                <p>Loan Amount:</p> 
                <p>Long Term</p>
                <p>Date of Application</p>
                <p>Application Status:</p>
                <p>Rejection Reson:</p>
            </div>
        </div>
        </div>
    );
}

export default index ;