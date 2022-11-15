import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/Data';

const StudentSingleInformation = () => {
    const [datas,setData]=useState({})
    const {id}=useParams()
    // const filterItems=Data.filter((data)=>data._id===id)
    // console.log(filterItems)
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:5000/singlestudent/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data.member);
            console.log(data.member)
        })
    },[])
    return (
        <div className='container'>
            <div className='row bg-light vh-100'>
                <div className="col-md-4 m-auto">
                    <div className='card'>
                        <div className='card-body'>
                        <p><span className='text-primary'>Name:</span>{datas.name}</p>
                 <p><span className='text-primary'>Email:</span>{datas.email}</p>
                 
                 <p><span className='text-primary'>Id:</span>{datas.id}</p>
                 
                 <p><span className='text-primary'>Session:</span>{datas.session}</p>
                 <p><span className='text-primary'>Batch:</span>{datas.batch}</p>
                
                 
                 <p><span className='text-primary'>blood-group:</span>{datas.blood_group}</p>
                 
                 <p><span className='text-primary'>Contact-Number:</span>{datas.contact_number}</p>
                 <p><span className='text-primary'>Skill:</span>{datas.skill}</p>    
                        </div>
                    </div>
                
                       
                 </div>
            </div>
           
        </div>
    );
};

export default StudentSingleInformation;