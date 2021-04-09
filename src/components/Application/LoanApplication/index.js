import React from "react";

const index = (props) => {
  return (
    <div
      className="loan_app"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <h2 style={{ color: "#ffa052",fontWeight:"bold" }}>LOANS</h2>
      <div style={{ display: "flex", flexDirection: "column",padding:"50px" }}>
        <p
          style={{
            backgroundColor: "#ffa052",
            width: "300px",
            height: "60px",
            borderRadius: "12px 12px 7px 7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold", 
            
          }}
        >
          Application 1
        </p>
        <div style={{marginLeft:"30px"}}>
          <p>Loan id:</p>
          <p>Loan Amount:</p>
          <p>Long Term</p>
          <p>Date of Application</p>
          <p>Application Status:</p>
          <p>Rejection Reson:</p>
        </div>
        <button style={{ color: "#ffa052",height:"25px",width:"110px",borderRadius:"10px",backgroundColor:"#ffa052",color:"white",fontWeight: "bold"}}>View Loan</button>
      </div>
    </div>
  );
};

export default index;
