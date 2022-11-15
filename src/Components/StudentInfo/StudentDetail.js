import React from 'react';
import { Link } from 'react-router-dom';

const StudentDetail = ({data}) => {
    //console.log(data)
    return (
        
        <div className='col-md-4'>
            
            <div className='card'>
            {/* <img style={{ width: '200px' }} src={`data:image/jpeg;base64,${data.image}`} alt="" /> */}
                <div className='card-body'>
                    <p>Name:{data.member.name}</p>
                    <span>batch:{data.member.batch}</span>
                    <Link to={`/student/${data._id}`}> <button  className='btn btn-info'>Click For more information</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;