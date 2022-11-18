import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
//import CircularProgress from '@mui/material/CircularProgress';
//import Alert from '@mui/material/Alert';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, users, isLoading,signInUsingGoogle}=useFirebase()
    //const [welcome,setWelcome]=useState(false)
    //console.log(user)
    const [done,setDone]=useState('')
    const location = useLocation()
    const history = useHistory()
    useEffect(()=>{
        fetch(`http://localhost:5000/student/${users?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setDone(data.submited)
         // setEmail(data.email)
          console.log(data)
    
        })
      },[users?.email])
    

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)
        //alert('Login  Successfull');
        // {
        //     done ?  history.push('/addmember') :history.push('/studentinfo')
        // }
       

    }

    
    return (
        <div className='login'>
                
                <div className='text-center text-light'><h1>Welcome To MBSTU</h1></div>
            
            <div className='col-md-3 m-auto border border-primary bg-light p-5'>
                    <h6 className='text-center mt-5'>Log-in</h6>
                    <form onSubmit={handleLogInSubmit}>
                        <label>Email:</label>
                        <input name="email" type="email" onChange={handleChange} className="form-control"  />
                        <label>Password:</label>
                        < input className='form-control' name="password" onChange={handleChange}  type="password"  />
                            <br/>
                        <button  type="submit" className='btn btn-success form-control'>LOGIN</button>

                        <Link to="/register">  <Button color="inherit">NEW USER?PLEASE REGISTER</Button> </Link>
                      
                        
                        <button className='btn btn-primary form-control' onClick={()=>signInUsingGoogle(location,history)}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;