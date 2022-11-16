// import React from 'react';

// const Notice = () => {
//     return (
//         <div className='container mt-5'>

//             <img src="https://i.ibb.co/qrJsLGt/notice-1.jpg" alt=''/>
            
//         </div>
//     );
// };

// export default Notice;
import React, { useEffect, useState } from 'react';
//import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';
import Notices from './Notices';


const AddDoctor = () => {
    //const [name, setName] = useState('')
    const [noticeData, setNoticeData] = useState([])
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(image)
        if (!image) {
            alert('image select please!')
            return
        }
        const formData = new FormData();
        
        formData.append('image', image)
        fetch('http://localhost:5000/notice', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Notice added successfully')
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    
   useEffect(()=>{
    fetch('http://localhost:5000/notice')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setNoticeData(data)
        
    })
},[])
    return (
        <div className='container'>
            <div className='row'>
            <div className='text-center mt-5'>
            <h2>add a notice</h2>
            <form onSubmit={handleSubmit}>
               
                <Input sx={{ width: '40%' }} accept="image/*" onChange={(e) => setImage(e.target.files[0])} type="file" />
                <br />
                <Button type="submit" variant="contained" >
                    Add Notice
                </Button>
            </form>
        </div>

                
            </div>
            <div className='row mt-3'>
                {
                    noticeData.map((data)=>{
                        return <Notices data={data}/>
                    })
                }
            </div>
        </div>
       
    );
};

export default AddDoctor;