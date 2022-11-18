import React, { useEffect, useState } from 'react';
import fakeData from '../Data/FakeData';
//import TeacherData from '../../Data/Data';

import Teachers from './Teachers';

const Teacher = () => {
    const [teacher,setTeacher]=useState(fakeData)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/teachers')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setTeacher(data)
    //     })
    // },[])
    
    return (
        <div className='container'>
            <div className='row bg-light'>
                
                {
                    teacher.map((t)=>{
                        return <Teachers key={t.name} data={t} />
                    })
                }
            </div>
            
        </div>
    );
};

export default Teacher;