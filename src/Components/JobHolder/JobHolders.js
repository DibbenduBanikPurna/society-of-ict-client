import React from 'react';

const JobHolders = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={data.pic} alt=""/>
                <div className='card-body mt-5'>
                    <p>{data.name}</p>
                    <span>{data.batch}</span>
                    <p>{data.company}</p>
                    <span>{data.post}</span>
                </div>
            </div>
            
        </div>
    );
};

export default JobHolders;