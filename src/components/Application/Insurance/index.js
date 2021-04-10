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
      <h2 style={{ color: "#ffa052", fontWeight: "bold", marginLeft: "30px" }}>
        INSURANCE
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          width: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "12px 12px 7px 7px",
        }}
      >
        <p
          style={{
            backgroundColor: "#ffa052",
            width: "300px",
            padding: "0",
            margin: "0",
            height: "40px",
            borderRadius: "12px 12px 7px 7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold", 
            position: "relative"
          }}
        >
          Life Insurance<span style={{position: "absolute",right: "10px",fontSize:"25px",fontWeight:"bold" }}>+</span>
        </p>
        <div className="loan_appText" style={{ marginLeft: "30px" }}>
          <p>Life Insurance Policy No:</p>
          <p>Life Insurance Policy Premium:</p>
        </div>
      </div> 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          width: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "12px 12px 7px 7px",
        }}
      >
        <p
          style={{
            backgroundColor: "#ffa052",
            width: "300px",
            padding: "0",
            margin: "0",
            height: "40px",
            borderRadius: "12px 12px 7px 7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            position: "relative"
          }}
        >
          Vehicle Insurance<span style={{position: "absolute",right: "10px",fontSize:"25px",fontWeight:"bold" }}>+</span>
        </p>
        <div className="loan_appText" style={{ marginLeft: "30px" }}>
          <h2
            style={{
              color: "#ffa052",
              marginBottom: "0px", 
              textAlign: "start"
            }}
          >
          1<sup style={{fontSize:"17px"}}> st</sup>   Year
          </h2>
          <p>Vehicle Insurance Policy Date:</p>
          <p>Vehicle Insurance Policy No.:</p>
          <p>Vehicle Insurance Premium:</p>
          <p>Insurance Renewal Date:</p>
        </div> 
        <div className="loan_appText" style={{ marginLeft: "30px" }}>
          <h2
            style={{
              color: "#ffa052",
              marginBottom: "0px", 
              textAlign: "start"
            }}
          >
          2<sup style={{fontSize:"17px"}}> nd</sup>   Year
          </h2>
          <p>Vehicle Insurance Policy Date:</p>
          <p>Vehicle Insurance Policy No.:</p>
          <p>Vehicle Insurance Premium:</p>
          <p>Insurance Renewal Date:</p>
        </div> 
        <div className="loan_appText" style={{ marginLeft: "30px" }}>
          <h2
            style={{
              color: "#ffa052",
              marginBottom: "0px", 
              textAlign: "start"
            }}
          >
          3<sup style={{fontSize:"17px"}}> rd</sup>   Year
          </h2>
          <p>Vehicle Insurance Policy Date:</p>
          <p>Vehicle Insurance Policy No.:</p>
          <p>Vehicle Insurance Premium:</p>
          <p>Insurance Renewal Date:</p>
        </div>
      </div>
    </div>
  );
};

export default index;
