import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const AddNewMember = () => {
  const [member,setMember]=useState({})
  const {users}=useFirebase()
  //console.log(member)

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
      body: JSON.stringify({member,submited:"true", email:users.email})
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
        <div className='row bg-light'>
            <div className='col-md-4 m-auto'>
              <div className='card'>
                <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <label>Name</label>
                  <input type="text" className='form-control' placeholder='Enter your Name' name="name" onBlur={handleBlur}/>
                  <label>Email</label>
                  <input type="text" className='form-control' placeholder='Enter your Email' name="email" onBlur={handleBlur}/>
                  <label>Student_Id</label>
                  <input type="text" className='form-control' placeholder='Enter your student-id' name="id" onBlur={handleBlur}/>
                  <label>Session</label>
                  <input type="text" className='form-control' placeholder='Enter your Session' name="session" onBlur={handleBlur}/>
                  <label></label>
                  <label>Blood-Group</label>
    <input type="text" className='form-control' placeholder='Enter your Blood-group' name="blood_group" onBlur={handleBlur}/>
    <label>Contact-Number</label>
    <input type="text" className='form-control' placeholder='Enter your contact-number' name="contact_number" onBlur={handleBlur}/>
      <label>skill</label>
      <input type="text" className="form-control" placeholder="Enter your Skill" name="skill" onBlur={handleBlur}/>
      <label>Batch</label>
      <input type="text" className="form-control" placeholder="Enter Your Batch" name="batch" onBlur={handleBlur}/>
      <br/>
      <input className="form-control" type="submit" value="Submit"/>

{/*   
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input onBlur={handleBlur} name="name" type="text" className="form-control" id="name" />
   
    <label></label>
  </div>
  <div class="mb-3">
    <label for="email" className="form-label">Email</label>
    <input onBlur={handleBlur} name="email" type="email" className="form-control" id="email"/>
  </div>
  <div class="mb-3 form-check">
  <label for="id" className="form-label">Id</label>
    <input onBlur={handleBlur} name="id" type="text" className="form-control text" id="id"/>

  </div>

  <div class="mb-3 form-check">
  <label for="session" className="form-label">Session</label>
    <input type="text" onBlur={handleBlur} name="session" className="form-control" id="session"/>
    <div class="mb-3 form-check">
  <label for="blood-group"onBlur={handleBlur} name="blood_group" className="form-label">Blood-Group</label>
    <input type="text" className="form-control" id="blood-group"/>
    
  </div>

  <div class="mb-3 form-check">
  <label for="contact" className="form-label">contact-number</label>
    <input type="text" onBlur={handleBlur} name="contact_number" className="form-control" id="contact"/>
    
  </div>

  <div class="mb-3 form-check">
  <label for="skill" className="form-label">Skill</label>
    <input type="text" onBlur={handleBlur} name="skill" className="form-control" id="skill"/>
    
  </div>
  <div class="mb-3 form-check">
  <label for="batch" className="form-label">Batch</label>
    <input type="text" onBlur={handleBlur} name="batch" className="form-control" id="batch"/>
    
  </div>

  </div>

  <button type="submit" class="btn btn-primary">Submit</button> */}
</form>
                </div>
              </div>
           
            </div>
        </div>
       
    );
};

export default AddNewMember;