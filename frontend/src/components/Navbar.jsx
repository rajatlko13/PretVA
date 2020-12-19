import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Logo from '../images/PretVALogo.png';
 
const Navbar = () => {
    return ( 
        <div className="container-fluid">
            <div className="navbar navbar-expand-lg row navbar-light bg-white text-dark my-1 pl-0">
                <div style={{position: 'relative', left: '0', marginRight: '15vw'}}>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} width="180vw" className="m-0 p-0" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link mx-4" aria-current="page" to="/about">About</NavLink>
                        <NavLink className="nav-link mx-4" to="/services">Services</NavLink> 
                        <NavLink className="nav-link mx-4" to="/searchPage">Search</NavLink>
                        <NavLink className="nav-link mx-4" to="/feedback">Feedback & Support</NavLink>
                    </div>
                    <div className="row" style={{ position: 'absolute', right: '0', marginRight: '3vw'}}>
                        {/* <Link to="/login">
                            <button className="btn mr-3 border-dark px-4" style={{borderRadius: '10px'}}>My Account</button>
                        </Link> */}
                        <div className="dropdown">
                            <button className="btn mr-3 border-dark px-1 dropdown-toggle" style={{borderRadius: '10px'}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <Link to="/register">
                            <button className="btn border-dark text-white px-4" style={{borderRadius: '10px', backgroundColor: 'rgb(18, 77, 81)'}}>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // <nav className="navbar navbar-expand-lg navbar-dark text-white my-4">
        //     <div className="container-fluid row d-flex justify-content-between">

        //         <div>
        //             <Link className="navbar-brand mr-5" to="/" style={{fontSize: '30px'}}>PretVA</Link>
        //         </div>
                
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                     <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        //                     <NavLink className="nav-link" to="/login">Login</NavLink> 
        //                     <NavLink className="nav-link" to="/userRegistration">User Registration</NavLink>
        //                     <NavLink className="nav-link" to="/doctorRegistration">Doctor Registration</NavLink>
                        
        //                 <span style={{position: 'absolute' , right: '2vw'}}>
        //                     <Link to="/login">
        //                         <button className="btn btn-light mr-3" color="red">Login</button>
        //                     </Link>
        //                     <Link to="/register">
        //                         <button className="btn btn-light" color="red">Register</button>
        //                     </Link>
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
     );
}

export default Navbar;