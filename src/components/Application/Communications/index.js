import React from "react";

const Communications = (props) => {
  return (
    <div style={{ marginLeft: "30px" }}>
      <h2
        style={{
          color: "#ffa052",
          textAlign: "start",
        }}
      >
        Communications
      </h2>
      <div
        className="comments"
        style={{ width: "97%", border: "2px solid rgb(212,210,210)" }}
      >
        <div
          className="user-comment"
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: "30px",
            width: "1000px",
          }}
        >
          <img
            className="user-img"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
            alt="profile"
          />
          <div className="comment">
            <div className="username" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  margin: "0",
                  paddingLeft: "30px",
                  color: "rgb(156,155,155",
                }}
              >
                <span className="bold" style={{ color: "#ffa052" }}>
                  Lorem Ipsum
                </span>{" "}
                10:44 AM
              </p>
            </div>
            <div
              className="userMessage"
              style={{
                margin: "0",
                padding: "10px",
                paddingLeft: "30px",
                color: "rgb(156,155,155",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos exercitationem impedit rerum nulla quos vel sequi accusantium
              reprehenderit, ullam nobis, officia dolores consectetur natus unde
              culpa voluptas enim aliquid.
            </div>
          </div>
        </div>
        <div
          className="user-comment"
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: "30px",
            width: "1000px",
          }}
        >
          <img
            className="user-img"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
            alt="profile"
          />
          <div className="comment">
            <div className="username" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  margin: "0",
                  paddingLeft: "30px",
                  color: "rgb(156,155,155",
                }}
              >
                <span className="bold" style={{ color: "#ffa052" }}>
                  Lorem Ipsum
                </span>{" "}
                10:44 AM
              </p>
            </div>
            <div
              className="userMessage"
              style={{
                margin: "0",
                padding: "10px",
                paddingLeft: "30px",
                color: "rgb(156,155,155",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos exercitationem impedit rerum nulla quos vel sequi accusantium
              reprehenderit, ullam nobis, officia dolores consectetur natus unde
              culpa voluptas enim aliquid.
            </div>
          </div>
        </div>
        <div
          className="user-comment"
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: "30px",
            width: "1000px",
          }}
        >
          <img
            className="user-img"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
            alt="profile"
          />
          <div className="comment">
            <div className="username" style={{ margin: "0", padding: "0" }}>
              <p
                style={{
                  margin: "0",
                  paddingLeft: "30px",
                  color: "rgb(156,155,155",
                }}
              >
                <span className="bold" style={{ color: "#ffa052" }}>
                  Lorem Ipsum
                </span>{" "}
                10:44 AM
              </p>
            </div>
            <div
              className="userMessage"
              style={{
                margin: "0",
                padding: "10px",
                paddingLeft: "30px",
                color: "rgb(156,155,155",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eos exercitationem impedit rerum nulla quos vel sequi accusantium
              reprehenderit, ullam nobis, officia dolores consectetur natus unde
              culpa voluptas enim aliquid.
            </div>
          </div>
        </div>
        <form style={{ display: "flex", justifyContent: "space-between" , margin:"40px 0 0 5px"}}>
            <div>
              <label
                style={{
                  display: "inline-block",
                  width: "900px",
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
                  width: "900px",
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
                marginRight: "20px",
                marginBottom: "15px",
                marginTop:"40px"
              }}
            >
              Submit
            </button>
          </form>
      </div>
    </div>
  );
};

export default Communications;
