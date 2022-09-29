import React from 'react'
import Navbar  from './component/navbar'
import Textform from './component/TextForm'

const App = () => {
  return (
    <>
<Navbar title="MyNavbar"/>
<div className="container my-3">
<Textform heading="Enter the text to analyze below"/>
</div>

    </>
  )
}

export default App;