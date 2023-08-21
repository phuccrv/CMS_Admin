import React, { useState } from "react";
import "./FormValidation.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineRight } from "react-icons/ai";
const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu
    const errors = {};
    if (firstName.trim() === "") {
      errors.firstName = "Please enter firstname!";
    }
    // if (firstName.length < 10) {
    //   errors.firstName = "firstName phải có ít nhất 10 ký tự";
    // }
    if (lastName.trim() === "") {
      errors.lastName = "Please enter lastname!";
    }
    if (state.trim() === "") {
      errors.state = "Please enter lastname!";
    }
    if (city.trim() === "") {
      errors.city = "Please enter city!";
    }
    if (zip.trim() === "") {
      errors.zip = "Please enter zip!";
    }
    setErrors(errors);
  };
  return (
    <div>
      <Header />
      <div className="show-Validation">
        <Sidebar />
        <div className="page-Validation">
          <div className="textFormValidation">
            <div className="title-FormValidation">
              <h4>Form Validation</h4>
            </div>
            <div className="link-page-validation">
              <p>Forms</p>
              <p>
                <AiOutlineRight />
              </p>
              <p>Form Validation</p>
            </div>
          </div>
          <div className="box-input-all">
            <div className="box-input-React">
              <div className="title-React-Validation-Normal">
                <h4>React Validation - Normal</h4>
                <p>
                  Provide valuable, actionable feedback to your users with HTML5
                  form validation-available in all our supported browsers.
                </p>
              </div>
              <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="input-tow">
                  <div className="class-input">
                    <label htmlFor="">First name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Mark"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors["firstName"] && (
                      <p className="error">{errors["firstName"]}</p>
                    )}
                  </div>
                  <div className="class-input">
                    <label htmlFor="">Last name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Otto"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors["lastName"] && (
                      <p className="error">{errors["lastName"]}</p>
                    )}
                  </div>
                </div>
                <div className="input-three">
                  <div className="class-input">
                    <label htmlFor="">City</label>
                    <br />
                    <input
                      type="text"
                      placeholder="City"
                      id="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {errors["city"] && (
                      <p className="error">{errors["city"]}</p>
                    )}
                  </div>
                  <div className="class-input">
                    <label htmlFor="">State</label>
                    <br />
                    <input
                      type="text"
                      placeholder="State"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    {errors["state"] && (
                      <p className="error">{errors["state"]}</p>
                    )}
                  </div>
                  <div className="class-input">
                    <label htmlFor="">Zip</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Zip"
                      id="zip"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                    {errors["zip"] && <p className="error">{errors["zip"]}</p>}
                  </div>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label htmlFor="">Agree to terms and conditions</label>
                </div>
                <div className="btn-submitform">
                  <button type="submit">Submi form</button>
                </div>
              </form>
            </div>
            <div className="box-down-bottom">


              {/* <div className="box-input-React-bottom">
                <div className="cart-title">Validation type</div>
                <div className="card-subtitle">
                  Parsley is a availity reactstrap validation. It helps you
                  provide your users with feedback on their form submission
                  before sending it to your server.
                </div>
                <form>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <input type="text" placeholder="Type Something"/>
                  </div>
                  <div className="form-input-down-bottom">
                    <label htmlFor="">Required</label>
                    <br />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </form>
              </div>
              <div className="box-input-React-bottom">
                <p>ấdasdsadasd
                </p>
              </div> */}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
