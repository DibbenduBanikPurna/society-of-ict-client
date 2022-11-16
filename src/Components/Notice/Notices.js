import React from 'react';

const Notices = ({data}) => {
    const {image}=data
    return (
        <div className='col-md-6 mt-5'>
        

                <img className='img-fluid' src={`data:image/jpeg;base64,${image}`} alt="" />
            
            
            
        </div>
    );
};

export default Notices;