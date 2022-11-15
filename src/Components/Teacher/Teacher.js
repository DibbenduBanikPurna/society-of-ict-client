import React, { useEffect, useState } from 'react';
//import TeacherData from '../../Data/Data';

import Teachers from './Teachers';

const Teacher = () => {
    const [teacher,setTeacher]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/teachers')
        .then(res=>res.json())
        .then(data=>{
            setTeacher(data)
        })
    },[])
    
    return (
        <div className='container'>
            <div className='row bg-light'>
                
                {
                    teacher.map((t)=>{
                        return <Teachers data={t} />
                    })
                }
            </div>
            
        </div>
    );
};

export default Teacher;