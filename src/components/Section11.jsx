import React, { useContext } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Langcontext } from '../context/Langcontext';

export const Section11 = () => {
    const [lang, setLang] = useContext(Langcontext);
  return (
    <Container className="mt-5">
      <Col sm={12} md={12}>
        <p style={{ fontSize: "50px" }}>
          {lang === "az"
            ? "Biz ehtiyacları ödəməyə çalışırıq"
            : "We trive to meet the needs"}
          <br /> {lang === "az"? "müştərilərimizi qiymətləndiririk və biz onları qiymətləndiririk": "of our clients and we value their"}
          <br />{lang === "az" ? "işimiz haqqında rəylər" : "opinions about our work"}
        </p>
      </Col>
    </Container>
  );
}
