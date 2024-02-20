import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../image/logo.avif'

const Navbaar = (props) => {

  const changeColor = ({ isActive }) => {
    return {
      // color: isActive ? "white" : "white",
      padding: isActive ? "5px" : "",
      color: isActive ? "rgb(228 32 32)" : "white",

    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3 border-bottom border-light ">
      <div className="container-fluid mx-auto position-relative text-center">
        <h2 className='text-white logo'>News
          <span className='text-danger'>App</span></h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 px-2 mb-lg-0 fw-bold ">
            <li className="nav-item mx-3">

              <NavLink to='/' style={changeColor}>Country</NavLink>

            </li>

            <li className="nav-item mx-3  ">
              <NavLink to='/sport' style={changeColor}>Sport</NavLink>

            </li>

            <li className="nav-item me-3 ">
              <NavLink to='/business' style={changeColor}> Business</NavLink>

            </li>
            <li className="nav-item">

              <NavLink to='/Technology' style={changeColor}> Technology</NavLink>

            </li>


          </ul>
          <form className="d-flex" role="search" >
            <input
              className="form-control me-2 "
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={props.input}
              onChange={(e) => props.setInput(e.target.value)}

            //  disabled={location.pathname==="/country"?true:false}  
            />
            <button className="btn btn-outline-danger" type='submit' onClick={props.Submit} >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbaar
