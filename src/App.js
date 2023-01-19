import React from "react";
import Textform from "./component/TextForm";
import Navbar from "./component/navbar";
import { useState } from "react";
import Alert from "./component/Alert";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192633f5";
      showAlert("Dark mode is enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode is enabled", "Success");
    }
  };

  
  return (
    <>
      <Navbar title="TextUtilizer" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
};

export default App;
