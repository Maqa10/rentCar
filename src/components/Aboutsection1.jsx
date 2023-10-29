import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

const Aboutsection1 = () => {
  useEffect(()=>{
    Aos.init({duration:"2000"})
  },[])
  return (
    <img
    data-aos="fade-down"
      src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/inner-ab-img-1.jpg"
      className="img-fluid mb-5"
      alt="..."
    ></img>
  );
}

export default Aboutsection1