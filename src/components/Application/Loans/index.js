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
      <h2 style={{ color: "#ffa052", fontWeight: "bold",marginLeft:"30px"}}>LOANS</h2>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "30px",width:"300px",boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",borderRadius: "12px 12px 7px 7px", }}
      >
        <p
          style={{
            backgroundColor: "#ffa052",
            width: "300px",
            padding:"0",
            margin: "0",
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
        <div className="LoansText" style={{ marginLeft: "30px" }}>
          <p>Loan id:</p>
          <p>Loan Amount:</p>
          <p>Long Term:</p>
          <p>Date of Disbursement:</p>
          <p>First EMI Date:</p>
          <p>EMI Amount:</p>
          <p>Principal:</p>
          <p>Attrition:</p>
          <p>EMI Due:</p>
        </div>
        <button
          style={{
            color: "#ffa052",
            height: "25px",
            width: "110px",
            borderRadius: "10px",
            backgroundColor: "#ffa052",
            color: "white",
            fontWeight: "bold",
            marginLeft:"90px",
            marginBottom:"10px", 
            marginTop:"5px"
          }}
        >
          View Loan
        </button>
      </div>
    </div>
  );
};

export default index;
