import React from 'react'

const navbar = (props) => {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            
            
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    
      
                  <div className={` text-center p-2 form-check form-switch text-${props.mode==='light' ? 'dark':'light' }`}>
          
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitch" />
                        <label className="form-check-label" htmlFor="flexSwitch">Dark Mode</label>
                   </div>
                
            
            </div>
</nav>
    </>
  )
}

export default navbar