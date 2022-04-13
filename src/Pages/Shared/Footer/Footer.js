import React from 'react';


const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <footer className='text-center mt-5 height-100  ' >
            <p><small > copyright @  {year} </small></p>
            <p><small>creator Emon Ahmed</small></p>
        
        
        </footer>
    );
};

export default Footer;