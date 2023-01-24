import React from "react";
import Textform from "./component/TextForm";
import Navbar from "./component/navbar";
import About from "./component/about";
import { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192633f5";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode is enabled", "info");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtilizer" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/"element={<Textform showAlert="showAlert"  heading="Enter the text to analyze below" mode={mode}/>}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
