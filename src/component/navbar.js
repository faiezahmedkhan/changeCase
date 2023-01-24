import React from 'react'
import { Link } from 'react-router-dom'

const navbar = (props) => {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            
            
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                          </li>
                    
                       
                          
                        </ul>
                      
                      </div>
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