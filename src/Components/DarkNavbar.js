import React from 'react';
export default function DNavbar(){
    return(
    <>
    <div>
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  <a className="navbar-brand mx-3" href="/" style={{ fontFamily: 'serif' }}>APEX NUCES</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="APEX" style={{ fontFamily: 'serif' }}>APEX NUCES</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
         
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"style={{ fontFamily: 'serif' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/"style={{ fontFamily: 'serif' }}>2nd component</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: 'serif' }}>
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
        </form>
      </div>
    </div>
  </div>
</nav>
</div>
</>
);}