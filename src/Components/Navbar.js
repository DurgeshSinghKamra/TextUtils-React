import React,{useState} from 'react'


export default function Navbar(props) {    
  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode === 'dark' ? 'dark' : 'light'}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode
        } />
        <label className= {`text-${props.mode === 'dark'? 'light' : 'dark'}`} htmlFor="switchCheckDefault ">{props.mode === 'light'? 'Enable Dark Mode' : 'Disable Dark Mode' } </label>
      </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse" }id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown  
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>  
  )
}
