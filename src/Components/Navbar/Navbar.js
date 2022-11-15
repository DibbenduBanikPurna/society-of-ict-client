import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Navbar = () => {
  const {users,logOut}=useFirebase()
  const [email,setEmail]=useState('')
  console.log(email)
  useEffect(()=>{
    fetch(`http://localhost:5000/student/${users?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setEmail(data.submited)
      //console.log(data.submited)

    })
  },[users?.email])
  //console.log(users)
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><span className='m-5'><img style={{height:'45px'}}  src="https://mbstu.ac.bd/assets/images/logo.png"/></span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <Link className="nav-item nav-link active" to="/">Home </Link>
            {users.email &&<Link className="nav-item nav-link" to="/studentinfo">Student-Info</Link>}
            {users.email &&<Link className="nav-item nav-link" to="/gallery">Gallery</Link>}
            {users.email &&<Link className="nav-item nav-link" to="/teachers">Teachers</Link>}
           {users.email && <Link className="nav-item nav-link" to="/notice">Notice</Link>}
            {users.email &&<Link className="nav-item nav-link" to="/jobholder">Job-Holder</Link>}
           {email? '' :  <Link className="nav-item nav-link" to="/addmember">Register  New Member</Link>}
              {users.email ? <Link className="nav-item nav-link" to="/"> <span onClick={logOut}>Logout</span>  </Link>:''}
              {users.email ? <span className="nav-item nav-link" >  {users.displayName}  </span>:''}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;