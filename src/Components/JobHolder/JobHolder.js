import React, { useState } from 'react';
//import jobHolderData from '../../Data/Data';
import JobHolders from './JobHolders';

const JobHolder = () => {
    const [jobpeople,setJobPeople]=useState([])
 
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobPeople(data)
        })
    return (
        <div className='container'>
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