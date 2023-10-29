import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SInglecard from "../components/SInglecard";
import { useSelector } from "react-redux";
import { Langcontext } from "../context/Langcontext";
import PriceFilter from "../components/PriceFilter";

const Shop = () => {
  const [lang, setLang] = useContext(Langcontext);
  const shop = useSelector((p) => p);
  const [category, setCategory] = useState([]);

  const [cards, setCards] = useState(shop);

  console.log(shop);

  const handleClick = (cat) => {
    const catData = shop.filter((p) => p.category === cat);
    setCategory(catData);
  };

  const handleFilterPrice = (price) => {
    if (price === 0) {
      setCards(shop);
    } else {
      setCards((state) => {
        const filteredCards = shop.filter((card) => +card.price <= price);

        return filteredCards;
      });
    }
  };

  return (
    <Container>
      <h1>{lang === "az" ? "Mağaza" : "Shop"}</h1>
      <Row className="">
        <Col sm={12} md={3}>
          <ul className="list-group">
            <li className="list-group-item">
              {lang === "az" ? "Kateqoriya" : "Category"}
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                handleClick("comfort-sport");
              }}
            >
              comfort-sport
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                handleClick("Off Road");
              }}
            >
              Off Road
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                handleClick("Supercar");
              }}
            >
              Supercar
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                handleClick("Ordenary");
              }}
            >
              {lang === "az" ? "Adi " : "Ordenary"}
            </li>
          </ul>

          <PriceFilter onSubmit={handleFilterPrice} />
        </Col>
        <Col sm={12} md={9}>
          <Row className="Shop-cars">
            {category.length === 0
              ? cards.slice(1,17).map((item, count) => (
                  <SInglecard
                    key={count}
                    image={item.image}
                    title1={item.title1}
                    category={item.category}
                    model={item.model}
                    info={item.info}
                    year={item.year}
                    price={item.price}
                    id={item.id}
                    alldata={item}
                  />
                ))
              : category.map((item, count) => (
                  <SInglecard
                    key={count}
                    image={item.image}
                    title1={item.title1}
                    category={item.category}
                    model={item.model}
                    info={item.info}
                    year={item.year}
                    price={item.price}
                    id={item.id}
                    alldata={item}
                  />
                ))}
            {/* // {category.map((item, count) => (
              <SInglecard
                key={count}
                image={item.image}
                title1={item.title1}
                category={item.category}
                model={item.model}
                info={item.info}
                year={item.year}
                price={item.price}
                id={item.id}
              />
            ))} */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;

// import React, { useContext, useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import SInglecard from "../components/SInglecard";
// import { useSelector } from "react-redux";
// import { Langcontext } from "../context/Langcontext";
// import PriceFilter from "../components/PriceFilter";

// const Shop = () => {
//   const [lang, setLang] = useContext(Langcontext);
//   const car = useSelector((p) => p);
//   const [category, setCategory] = useState([]);

//   const [cards, setCards] = useState(car);

//   // console.log(shop);

//   const handleClick = (cat) => {
//     const catData = car.filter((p) => p.category === cat);
//     setCategory(catData);
//   };

//   const handleFilterPrice = (price) => {
//     if (price === 0) {
//       setCards(car);
//     } else {
//       setCards((state) => {
//         const filteredCards = car.filter((card) => +card.price <= price);

//         return filteredCards;
//       });
//     }
//   };

//   return (
//     <Container>
//       <h1>{lang === "az" ? "Mağaza" : "Shop"}</h1>
//       <Row className="">
//         <Col sm={12} md={3}>
//           <ul className="list-group">
//             <li className="list-group-item">
//               {lang === "az" ? "Kateqoriya" : "Category"}
//             </li>
//             <li
//               className="list-group-item"
//               onClick={() => {
//                 handleClick("comfort-sport");
//               }}
//             >
//               comfort-sport
//             </li>
//             <li
//               className="list-group-item"
//               onClick={() => {
//                 handleClick("Off Road");
//               }}
//             >
//               Off Road
//             </li>
//             <li
//               className="list-group-item"
//               onClick={() => {
//                 handleClick("Supercar");
//               }}
//             >
//               Supercar
//             </li>
//             <li
//               className="list-group-item"
//               onClick={() => {
//                 handleClick("Ordenary");
//               }}
//             >
//               {lang === "az" ? "Adi " : "Ordenary"}
//             </li>
//           </ul>

//           <PriceFilter onSubmit={handleFilterPrice} />
//         </Col>
//         <Col sm={12} md={9}>
//           <Row className="Shop-cars">
//             {category.length === 0
//               ? cards.map((item, count) => (
//                   <SInglecard
//                     key={count}
//                     image={item.image}
//                     title1={item.title1}
//                     category={item.category}
//                     model={item.model}
//                     info={item.info}
//                     year={item.year}
//                     price={item.price}
//                     id={item.id}
//                     alldata={item}
//                   />
//                 ))
//               : category.map((item, count) => (
//                   <SInglecard
//                     key={count}
//                     image={item.image}
//                     title1={item.title1}
//                     category={item.category}
//                     model={item.model}
//                     info={item.info}
//                     year={item.year}
//                     price={item.price}
//                     id={item.id}
//                     alldata={item}
//                   />
//                 ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Shop;
