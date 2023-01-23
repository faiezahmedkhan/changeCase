import React, { useState } from "react";

const TextForm = (props) => {
  const handelclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };

  const handelclicklower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success")
  };

  const handelcear = () => {
    let newText = "";
    setText(newText);
  };

  const handerCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handelOnChange = (e) => {
    setText(e.target.value);
  };
  // const handerMatchMail = () => {
  //   let mailfrmTEXT = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  // };

  const RemoveExtraSpaces = () => {
    let newString = text.split(/[ ]+/);
    setText(newString.join(" "));
  };

  const [text, setText] = useState("Enter text Here to Change Case");

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-info text-white mx-1" onClick={handelclick}>
        Convert to Uppercase
      </button>
      <button
        className="btn btn-info text-white mx-1"
        onClick={handelclicklower}
      >
        Convert to Lowercase
      </button>
      <button className="btn btn-info text-white mx-1" onClick={handerCopy}>
        Copy to Clipboard
      </button>
      {/* <button
        className="btn btn-info text-white mx-1"  onClick={handerMatchMail}
      >
        Mail ID from Peragrph
      </button> */}
      <button
        className="btn btn-info text-white mx-1"
        onClick={RemoveExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button className="btn btn-info text-white mx-1" onClick={handelcear}>
        Clear
      </button>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summery</h1>
        <p>
          {text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} Characters

        </p>
        <p>{0.008 * text.split(" ").length} Times to read</p>
        <h2>Plain Text Here</h2>
        <p>{text.length > 0 ? text : "Enter Somthing to Preview"}</p>
      </div>
    </div>
  );
};

export default TextForm;
