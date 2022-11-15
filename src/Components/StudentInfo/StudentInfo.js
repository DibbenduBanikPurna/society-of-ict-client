import React, { useEffect, useState } from 'react';
//import Data from '../Data/Data';
import StudentDetail from './StudentDetail';

const StudentInfo = () => {
    //data store
    const [studentData,setStudentData]=useState([])
    //const [filter,setFilter]=useState([])
    const [search,setSearch]=useState('')
    
    //calling function in useEffect
    useEffect(()=>{
        fetch('http://localhost:5000/student')
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setStudentData(data)
            //setFilter(data)
        })
    },[])

    
    return (
        <div className='container'>
            <form style={{float:'right'}}>
            <input onChange={(e)=>setSearch(e.target.value)}  type="text" placeholder="Enter Student Name" name="search"/>
           
            </form>
           
            <div className='row mt-3'>
                {
                    studentData?.filter((val)=>{
                        if(search==="")
                        {
                            return val

                        }
                        else if(val?.member.name.toLowerCase().includes(search.toLowerCase()))
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