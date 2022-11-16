import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
//import jobHolderData from '../../Data/Data';
import JobHolders from './JobHolders';

const JobHolder = () => {
    const [jobpeople,setJobPeople]=useState([])
    const [user,setUser]=useState({})
    const history=useHistory()    
    fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobPeople(data)
        })


        const handleChange=(e)=>{
            const field = e.target.name;
            const value = e.target.value
            const newData = { ...user };
            newData[field] = value
            setUser(newData)
        }

        const handleSubmit=(e)=>{
            e.preventDefault()
            fetch('http://localhost:5000/addjobholder',{
               
                method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
            })
            alert("Data added successfully");
            history.push('jobholder')
            
           
        }

        useEffect(()=>{
            fetch('http://localhost:5000/jobholder')
            .then(res=>res.json())
            .then(data=>{
                setJobPeople(data)
            })
        },[])
       
    return (
        <div className='container bg-light'>
            <div className='row'>
               
                <form onSubmit={handleSubmit}  className="m-auto">
                <h5 className='text-center'>Enter Your Job information</h5>
                    <label>Name:</label>
                    <br/>
                    <input onChange={handleChange} name="name" type="text" placeholder='Enter-Name'/>
                    <br/>
                    <label>Email:</label>
                    <br/>
                    <input type="email" onChange={handleChange} name="email" placeholder='Enter-Email'/>
                    <br/>
                    <label>Batch:</label>
                    <br/>
                    <input type="text" onChange={handleChange} name="batch" placeholder='Enter-Batch'/>
                    <br/>
                    <label>Company:</label>
                    <br/>
                    <input type="text" onChange={handleChange} name="company" placeholder='Enter-Company'/>
                    <br/>
                    <label>Post:</label>
                    <br/>
                    <input type="text" onChange={handleChange} name="post" placeholder='Enter-Post'/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
            <div className='row mt-2'>
                {
                    jobpeople.map((job=>{
                        return <JobHolders data={job} />
                    }))

                }
            </div>
           
        </div>
    );
};

export default JobHolder;