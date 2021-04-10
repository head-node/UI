import React from "react";

const index = (props) => {
  return (
    <>
      <h2 style={{ color: "#ffa052", fontWeight: "bold", marginLeft: "30px" }}>
        COLLECTIONS
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
        }}
      >
        <div className="collection">
          <p>Last Payment Date:</p>
          <p>Last Payment Received:</p>
          <p>Total Due till Date:</p>
          <p>Principal:</p>
          <p>Altrition Balance:</p>
        </div>
        <div style={{ display: "flex", alignItems: "end" }}>
          <button
            style={{
              color: "#ffa052",
              height: "40px",
              width: "130px",
              borderRadius: "10px",
              backgroundColor: "#ffa052",
              color: "white",
              fontWeight: "bold", marginRight: "25px", 
              marginBottom: "15px"
            }}
          >
            Pay
          </button>
          <button
            style={{
              color: "#ffa052",
              height: "40px",
              width: "130px",
              borderRadius: "10px",
              backgroundColor: "#ffa052",
              color: "white",
              fontWeight: "bold",
              marginRight:"50px",
              marginBottom: "15px"
            }}
          >
            Logs
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
