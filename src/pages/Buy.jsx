import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilContext } from "../context/ProfilContext";
import { Langcontext } from "../context/Langcontext";

const userlogin = {
  email: "user@user.gmail.com",
  password: "user12345",
};


const Buy = () => {
  const [lang, setLang] = useContext(Langcontext);
    // const [user, setUser] = useContext(ProfilContext);
const[email,setEmail] = useState("");
const[password,setPassword] = useState("")
  const [name,setName] = useState("")
  const[cartnum,setcartNum] = useState("")
  const navigate = useNavigate()
  const [expiry,setExpiry] = useState("")
  const [cvv,setCvv] = useState("")
   const [msg, setMsg] = useState({
     text: "",
     color: "",
   });
  const buySubmit = (e) =>{
  e.preventDefault()
  if (!name || !cartnum || !expiry || !cvv ) {
    setMsg({
      width:"100px",
      text: "please fill the input",
      color: "danger",
    });
      // navigate("/login");
  } else {
navigate("/succesfullybuy");
  }
  // { if (email === userlogin.email && password === userlogin.password){
  //       navigate("/shop");
  //   setMsg({
  //     text: "Successfully done",
  //     color: "success",
  //   });
  //           //  localStorage.setItem("active", "true");
  //            window.location.reload();
  // };

  

  }
  return (
    <div className="mainscreen">
      {/* <div>
        <p className={`alert alert-${msg.color}`}>
          {msg.text}
        </p>
      </div> */}
      <div className="card-buy">
        <div className="leftside">
          <img
            src="https://avatars.mds.yandex.net/get-autoru-vos/2121561/07b70c7f5c2910c15d06f8bce85a2558/456x342n"
            className="product"
            alt="car"
          />
        </div>
        <div className="rightside">
          <form onSubmit={buySubmit}>
            <h1>CheckOut</h1>
            <h2>{lang === "az" ? "Ödəniş Məlumatı" : "Payment Information"}</h2>
            <p>
              <h2>
                {lang === "az" ? "Kart sahibinin adı" : "Cardholder Name"}
              </h2>
            </p>
            <input
              type="text"
              className="inputbox"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p>{lang === "az" ? "Kartın nömrəsi" : "Card Number"}</p>
            <input
              type="number"
              className="inputbox"
              name="card_number"
              id="card_number"
              onChange={(e) => setcartNum(e.target.value)}
              required
            />
            <p>Card Type</p>
            <select className="inputbox" name="card_type" id="card_type">
              <option value="">
                {lang === "az"
                  ? "--Kart növünü seçin--"
                  : "--Select a Card Type--"}
              </option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div className="expcvv">
              <p className="expcvv_text">
                {lang === "az" ? "İstifadə müddəti" : "Expiry"}
              </p>
              <input
                type=""
                className="inputbox"
                name="exp_date"
                id="exp_date"
                placeholder="xx/xx"
                onChange={(e) => setExpiry(e.target.value)}
                required
              />

              <p className="expcvv_text2">CVV</p>
              <input
                type="password"
                className="inputbox"
                name="cvv"
                id="cvv"
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="button1">
              {lang === "az" ? "Almaq" : "Buy"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Buy