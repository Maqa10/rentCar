import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Section6 = () => {
  return (
    <Container>
      <Col sm={12} className='mt-5'>
        {/* <video controls>
          <source
           src='../assets/video/RR.mp4'
            type="video/mp4"
          />
        </video> */}
        {/* <video controls src="../assets/video/RR.mp4" type="video/mp4"></video> */}
        <img
          src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-2.jpg"
          class="img-fluid"
          alt="..."
        ></img>
      </Col>
      {/* <div>
        <iframe className='section-6-video w-100'
          height="800"
          src="https://www.youtube.com/embed/ItreON4lIW8?si=mkRXaYhhqyY1EDyj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </Container>
  );
}

export default Section6