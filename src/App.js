import React from 'react'
import Textform from './component/TextForm'
import Navbar from './component/navbar'
import { useState } from 'react'

const App = () => {
  const [mode, setMode] = useState('light');

  const togglemode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#192633f5';
    } else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';

    }

  }
  return (
    <>
        <Navbar title="TextUtilizer"  mode={mode} togglemode={togglemode} />

        <div className="container my-3">
        <Textform heading="Enter the text to analyze below" mode={mode}/>
        </div>

    </>
  )
}

export default App;