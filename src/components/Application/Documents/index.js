import React from "react";

const Documents = (props) => {
  return (
    <>
      <div className="documents">
        <h2>ADDITIONAL DOCUMENTS</h2>
        <p>Upload your document</p>
        <p>Document Type: .............</p>
        <div className="upload-file">
          <label for="file-upload" class="custom-file-upload">
            Choose File
          </label>
          <input id="file-upload" type="file" />
          <button className="upload" type="submit">
            Upload
          </button>
        </div>
        <div className="list">
          <h3>Additional Documents List:-</h3>
          <div className="document-item">
            <img
              style={{ height: "80px", width: "80px" }}
              src="https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png"
              alt="file"
            />
            <p style={{ color: "rgb(102,100,100" }}>Lorem ipsum dolor sit</p>
          </div>
          <div className="document-item">
            <img
              style={{ height: "80px", width: "80px" }}
              src="https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png"
              alt="file"
            />
            <p style={{ color: "rgb(102,100,100" }}>Lorem ipsum dolor sit</p>
          </div>
          <div className="document-item">
            <img
              style={{ height: "80px", width: "80px" }}
              src="https://i.pinimg.com/originals/7f/d2/e4/7fd2e46b2da9819e667fb75caf475cf7.png"
              alt="file"
            />
            <p style={{ color: "rgb(102,100,100" }}>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
