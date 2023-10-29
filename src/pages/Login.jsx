import React, { useContext, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Langcontext } from "../context/Langcontext";



const  admin ={
  email:"admin@admin",
  password: "user12345",
}


const userlogin = {
  // email: "user@user.gmail.com",
  email: "",
  password: "user12345",
};

const Login = () => {
  const [lang, setLang] = useContext(Langcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [messege, setMessege] = useState({
    text: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessege({
        text: "please fill the input",
        color: "danger",
      });
    } else {
      if (password === userlogin.password) {
        setMessege({
          text: "Successfully done",
          color: "success",
        });
        navigate("/shop");

        localStorage.setItem("active", "user@user.gmail.com");
        window.location.reload();
      } else {
        setMessege({
          text: "email or password  is wrong",
          color: "danger",
        });
      }
    }








if (!email || !password) {
  setMessege({
    text: "please fill the input",
    color: "danger",
  });
} else {
  if (email === admin.email && password === admin.password) {
    setMessege({
      text: "Successfully done",
      color: "success",
    });
    navigate("/admin");

    localStorage.setItem("active", "admin@admin");
    window.location.reload();
  } else {
    setMessege({
      text: "email or password  is wrong",
      color: "danger",
    });
  }
}




  };

  return (
    <Container>
      <h1 className="text-center my-5">Login</h1>
      <div className="d-flex justify-content-center">
        <Col md={6}>
          <p className={`alert alert-${messege.color}`}>{messege.text}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                {lang === "az" ? "E-poçt ünvanı" : "Email address"}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="enter your email,please"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text text-light">
                {lang === "az"
                  ? "E-poçtunuzu heç vaxt başqası ilə paylaşmayacağıq."
                  : "We'll never share your email with anyone else."}
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                {lang === "az" ? "parol" : "Password"}
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your password,please"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                {lang === "az" ? "Yoxla" : "Check me out"}
              </label>
            </div>
            <div className="d-flex">
              <button  type="submit" className="btn btn-primary" style={{borderRadius:"20px"}}>
                Login
              </button>
              <Link to="/registration">
                {/* <button>sign in</button> */}
                <button className="sign-up ms-3">
                  Sign up
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button>
              </Link>
            </div>
          </form>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
