import React, { useState } from 'react';
import Pic from '../Data/Data';
import Gallerys from './Gallerys';

const Gallery = () => {
    const [pic,setPic]=useState(Pic)
    return (
        <div className='container'>
            <div className='row'>
                {
                    pic.map((data)=>{
                        return <Gallerys data={data} key={data.id} />
                    })
                }
                
            </div>
            
        </div>
    );
};

export default Gallery;