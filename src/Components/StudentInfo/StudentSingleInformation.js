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
            setData(data);
        })
    },[])
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4 m-auto">
                
                 <p>Name:{datas.name}</p>
                 <p>email:{datas.email}</p>
                 
                 <p>Id:{datas.id}</p>
                 
                 <p>session:{datas.session}</p>
                 <p>Batch:{datas.batch}</p>
                
                 
                 <p>Blood-Group:{datas.blood_group}</p>
                 
                 <p>Contact-Number:{datas.contact_number}</p>
                 <p>skill:{datas.skill}</p>           
                 </div>
            </div>
           
        </div>
    );
};

export default StudentSingleInformation;