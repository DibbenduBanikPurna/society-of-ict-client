import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import StudentDetail from './StudentDetail';

const StudentInfo = () => {
    const [studentData,setStudentData]=useState([])
    const [filter,setFilter]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/student')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setStudentData(data)
            setFilter(data)
        })
    },[])

    const handleSubmit=(e)=>{

    }
    return (
        <div className='container'>
            <form style={{float:'right'}} onSubmit={handleSubmit}>
            <input onChange={(e)=>setSearch(e.target.value)}  type="text" name="search"/>
            <input className='btn btn-warning' type="submit" value="submit"/>
            </form>
           
            <div className='row mt-3'>
                {
                    studentData.filter((val)=>{
                        if(search==="")
                        {
                            return val

                        }
                        else if(val.name.toLowerCase().includes(search.toLowerCase()))
                        {
                            return val
                        }
                    }).map((data)=>{
                        return <StudentDetail data={data} />
                    })
                }
               
            </div>
            
        </div>
    );
};

export default StudentInfo;