import React from "react";

function index(props) {
  return (
    <div>
      <div className="loan_appText" style={{ marginLeft: "30px" }}>
        <h2
          style={{
            color: "#ffa052",
            textAlign: "start",
          }}
        >
          IOT
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <div>
            <p>Lorem ipsum:</p>
            <p>Lorem ipsum:</p>
            <p>Lorem ipsum:</p>
            <p>Lorem ipsum:</p>
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
                fontWeight: "bold",
                marginRight: "50px",
                marginBottom: "15px",
              }}
            >
              Immobilize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
