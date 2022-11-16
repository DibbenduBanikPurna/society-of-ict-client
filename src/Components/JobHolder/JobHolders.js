import React from 'react';

const JobHolders = ({data}) => {
    return (
        <div className='col-md-4 mt-4'>
            <div className='card'>
                <img src={data.pic} alt=""/>
                <div className='card-body mt-5'>
                    <p>Name:{data.name}</p>
                    <p>Email:{data.email}</p>
                    <p>Batch:{data.batch}</p>
                    <p>Company:{data.company}</p>
                    <span>Post:{data.post}</span>
                </div>
            </div>
            
        </div>
    );
};

export default JobHolders;