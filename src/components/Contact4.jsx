import React from 'react'
import { Container } from 'react-bootstrap';

const Contact4 = () => {
  return (
    <Container className="mt-5 mb-5">
      <iframe
        src="https://my.atlist.com/map/5f605c0d-c438-45a9-9c66-ea240d1ef1b7?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="400px"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
    </Container>
  );
}

export default Contact4