import React, { useState } from 'react';

const Registers = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [id,setId]=useState('')
    const [session,setSession]=useState('')
    const [blood,setBlood]=useState('')
    const [image,setImage]=useState(null)
    const [skill,setSkill]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!image) {
            alert('image select please!')
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email)
        formData.append('id',id )
        formData.append('blood', blood )
        formData.append('session', session)
        formData.append('skill', skill)
        formData.append('image', image)
        fetch('http://localhost:5000/studentdata', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log('doctor added successfully')
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });


    }
    // const handleChange=(e)=>{

    // }
    return (
        <div className='text-center'>
              <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder='Enter Your Full Name' onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <input name="id" type="text" placeholder='Enter Your Roll Number' onChange={(e)=>setId(e.target.value)}/>
                <br/>
                <input name="session" type="text" placeholder='Enter Your Session' onChange={(e)=>setSession(e.target.value)}/>
                <br/>
                <input name="email" type="email" placeholder='Enter Your email' onChange={(e)=>setEmail(e.target.email)}/>
                <br/>
                <input name="blood" type="text" placeholder='Enter Your Blood Group' onChange={(e)=>setBlood(e.target.value)}/>
                <br/>
                <textarea name="skill" type="text" placeholder='Enter Your Skills' onChange={(e)=>setSkill(e.target.value)}/>
                <br/>
               <input sx={{ width: '40%' }} accept="image/*" onChange={(e) => setImage(e.target.files[0])} type="file" />
               <br/>
               <input type="submit" value="submit"/>
                </form>  

        </div>
    );
};

export default Registers;