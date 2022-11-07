import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddNewMember = () => {
  const [member,setMember]=useState({})
  console.log(member)

  const history=useHistory()
  const handleBlur=(e)=>{
    const field = e.target.name;
        const value = e.target.value
        const newData = { ...member };
        newData[field] = value
        setMember(newData)
        
        //console.log(loginData)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:5000/addmember', {
      method: 'post',
      headers: {
          //'authorization': `Bearer ${token}`,
          'content-type': 'application/json'
      },
      body: JSON.stringify(member)
  }).then(res => res.json())
      .then(data => {
         // setSuccess(true)
         // setEmail("")
          console.log(data)
          history.push('/studentinfo')
          alert("Member added successfully");
      })
  }

    return (
        <div className='row'>
            <div className='col-md-4 m-auto'>
              <div className='card'>
                <div className='card-body'>
                <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input onBlur={handleBlur} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input onBlur={handleBlur} name="email" type="email" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
  <label for="exampleInputPassword1" className="form-label">Id</label>
    <input onBlur={handleBlur} name="id" type="text" className="form-control" id="exampleInputPassword1"/>

  </div>

  <div class="mb-3 form-check">
  <label for="exampleInputPassword1" className="form-label">Session</label>
    <input type="text" onBlur={handleBlur} name="session" className="form-control" id="exampleInputPassword1"/>
    <div class="mb-3 form-check">
  <label for="exampleInputPassword1"onBlur={handleBlur} name="blood_group" className="form-label">Blood-Group</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
    
  </div>

  <div class="mb-3 form-check">
  <label for="exampleInputPassword1" className="form-label">contact-number</label>
    <input type="text" onBlur={handleBlur} name="contact_number" className="form-control" id="exampleInputPassword1"/>
    
  </div>

  <div class="mb-3 form-check">
  <label for="exampleInputPassword1" className="form-label">Skill</label>
    <input type="text" onBlur={handleBlur} name="skill" className="form-control" id="exampleInputPassword1"/>
    
  </div>
  <div class="mb-3 form-check">
  <label for="exampleInputPassword1" className="form-label">Batch</label>
    <input type="text" onBlur={handleBlur} name="batch" className="form-control" id="exampleInputPassword1"/>
    
  </div>

  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
              </div>
           
            </div>
        </div>
       
    );
};

export default AddNewMember;