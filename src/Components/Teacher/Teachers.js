import React from 'react';

const Teachers = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={data.pic} alt=""/>
                <div className='card-body'>
                    <p>Name:{data.name}</p>
                    <span>{data.post}</span>
                    <p>Email:{data.email}</p>
                    <span>Contact-No:{data.no}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Teachers;