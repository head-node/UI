import React from "react";
import BasicDetails from "../Application/BasicDetails";
import CreditScore from "../Application/CreditScore";
import Documents from "../Application/Documents";
function index(props) {
  return (
    <div
      style={{
        width: "100%",
        margin: "70px 20px 30px 20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="basicDetail">
        <h2>Basic Details:</h2>
      </div>
      <div style={{ marginTop: "80px" }}>
        <h2 style={{ textAlign: "end", marginRight: "80px" }}>Credit Score:</h2>
        <div className="creditScore">
          <BasicDetails />
          <CreditScore />
        </div>
        <hr />
      </div>
      <Documents />
    </div>
  );
}

export default index;
