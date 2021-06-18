import "./App.css";
import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    password: "",
  });
  const [checkValue, setCheclValue] = useState(false);
  const [errors, setErrors] = useState({
    emailerror1: "",
    passworderror1: "",
    companyerror: "",
  });

  const [mailValid, setMailValid] = useState(null);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const regexEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      company.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      return setErrors({
        emailerror1: "This field cannot be Empty",
        passworderror1: "Password Cannot Be Empty",
        companyerror: "Company Name Cannot be Empty",
      });
    }

    if (password.length <= 10 || password.length >= 20) {
      return setErrors({
        passworderror1: "Password should be in range 10 to 20 char only",
      });
    }
    setMailValid(regexEmail(email));

    if (mailValid === false) {
      return setErrors({ emailerror1: "Mail is Wrong" });
    }
    setFormData({
      email: "",
      password: "",
      company: "",
    });
    setErrors({
      emailerror1: null,
      passworderror1: null,
      companyerror: null,
    });
    console.log(formData);
  };
  const { emailerror1, passworderror1, companyerror } = errors;
  const { email, password, company } = formData;
  return (
    <>
      <div className="container">
        <div className="container_heading">
          <h1>Sign Up</h1>
          <p>No Credit Card Required</p>
        </div>
        <form className="container_input">
          <div className="container_fullwidth">
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={onChange}
            />
            {emailerror1 ? (
              <span className="span_danger">{emailerror1}</span>
            ) : null}
          </div>
          <div className="container_fullwidth">
            <input
              type="text"
              placeholder="Enter Name of Company"
              name="company"
              value={company}
              onChange={onChange}
            />
            {companyerror ? (
              <span className="span_danger">{companyerror}</span>
            ) : null}
          </div>
          <div className="container_fullwidth">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={onChange}
            />
            {passworderror1 ? (
              <span className="span_danger">{passworderror1}</span>
            ) : null}
          </div>
          <div className="container_input--checkbox">
            <label>
              <input type="checkbox" />I agree to the{" "}
              <span className="checkbox_span">Terms {"&"} Conditions</span>
            </label>
          </div>
        </form>
        <button className="btn_div" onClick={onSubmit}>
          <p className="btn_p">Get Started</p>
        </button>
        <p className="link_para">
          Already Have an Account <span>Sign In ?</span>
        </p>
      </div>
    </>
  );
}
export default App;
