import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

const Contact1 = () => {
    useEffect(()=>{
 Aos.init({ duration: 3000 });
    },[])
  return (
    <div>
      <img
      data-aos="fade-down"
        src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-c-img-1.jpg."
        className="img-fluid"
        alt="..."
      ></img>
    </div>
  );
}

export default Contact1