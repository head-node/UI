import React from "react";

const index = (props) => {
  return (
    <div className="basic">
      <div className="profile">
        <div className="profilepic">
          <img
            src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
            alt="profile"
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </div>
        <div className="user-detail" style={{ marginLeft: "30px" }}>
          <p>
            <span className="bold">Name: </span> Lorem Ipsum
          </p>
          <p>
            <span className="bold">Email: </span> Lorem@Ipsum.com
          </p>
          <p>
            <span className="bold">Father's Name: </span> Lorem Ipsum
          </p>
          <p>
            <span className="bold">Martial Status: </span> Lorem Ipsum
          </p>
          <p>
            <span className="bold">Address: </span> Lorem Ipsum
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default index;
