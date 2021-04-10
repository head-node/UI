import React from "react";

const index = (props) => {
  return (
    <>
      <div className="loan_appText" style={{ marginLeft: "30px" }}>
        <h2
          style={{
            color: "#ffa052",
            textAlign: "start",
          }}
        >
          REMARKS:
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ marginBottom: "0px" }}>Remarks added by:</h3>
          <div>
            <h4>
              Lorem ipsum
              <span style={{ marginLeft: "10px", color: "#83878D" }}>
                11.25 AM
              </span>
              <span style={{ marginLeft: "10px" }}></span> 04th Sep, 2020
            </h4>
            <p style={{ color: "#83878D" }}>Lorem Ipsum is Lorem Ips </p>
          </div>

          <div>
            <h4>
              Lorem ipsum{" "}
              <span style={{ marginLeft: "10px", color: "#83878D" }}>
                11.25 AM
              </span>{" "}
              <span style={{ marginLeft: "10px" }}></span>04th Sep, 2020
            </h4>
            <p style={{ color: "#83878D" }}>Lorem Ipsum is Lorem Ips</p>
          </div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label
                style={{
                  display: "inline-block",
                  width: "1000px",
                  padding: "10px 30px",
                  border: "1px solid  rgb(156, 155, 155)",
                }}
                for="input"
              >
                Message # revfin
              </label>
              <br></br>
              <input
                style={{
                  display: "inline-block",
                  width: "1000px",
                  padding: "10px 30px",
                  border: "1px solid  rgb(156, 155, 155)",
                  backgroundColor:"rgb(249, 249, 243)"
                }}
                type="text"
                id="input"
              ></input>
            </div>
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
                marginTop:"40px"
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
