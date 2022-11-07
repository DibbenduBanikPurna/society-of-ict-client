import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1>oops! 404 NOT FOUND........</h1>
           <Link to="/"><button className='btn btn-primary'>GO Home</button></Link> 
        </div>
    );
};

export default NotFound;