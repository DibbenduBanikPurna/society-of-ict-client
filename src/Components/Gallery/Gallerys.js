import React from 'react';

const Gallerys = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-6'>
                    <div className='card mt-5'>
                        <img src={data.img} alt={data._id}/>
                        <div className='card-body'>

                        </div>
                    </div>
                </div>
    );
};

export default Gallerys;