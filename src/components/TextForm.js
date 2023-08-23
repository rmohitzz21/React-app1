import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new text");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#181818' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Conver To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Conver To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white': '#7f7f7f'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} word and{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
