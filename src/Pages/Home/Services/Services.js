import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
 import './Services.css'
//  const services =[
// {id:1, name:'oil change',price:100, description:' ' ,img:'https://i.ibb.co/tLkdSZm/muscular-car-service-worker-repairing-vehicle.png'},
// {id:1, name:'oil change',price:100, description:' ' ,img:'https://i.ibb.co/tLkdSZm/muscular-car-service-worker-repairing-vehicle.png'},
// {id:1, name:'oil change',price:100, description:' ' ,img:'https://i.ibb.co/tLkdSZm/muscular-car-service-worker-repairing-vehicle.png'},

//  ]
     
 
const Services = () => {
    const [ services,setServices]  =useState([ ])

    useEffect(()=>{
     fetch('services.json')
     .then(res=>res.json())
     .then(data=>setServices(data))

    },[])
    return (
        <div className='container' >
           <h2 className='title mt-5'>Our Services:</h2>
                 <div className='services-container '>
                 {
            services.map(service=><Service  key={service.id} service={service}></Service>)
           }
                     
                     </div>   

        </div>
    );
};

export default Services;