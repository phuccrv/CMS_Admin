import React from "react";
import "./FormsElements.css";
import { AiOutlineRight } from "react-icons/ai";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const FormsElements = () => {
  return (
    <div>
      <Header />
      <div className="component-header-FormsElements">
        <Sidebar />
        <div className="FormsElements">
          <div className="title-FormsElements">
            <h4>Form Elements</h4>
            <div className="link-pages">
              <p>Forms</p>
              <span>
                <AiOutlineRight />
              </span>
              <p>Form Elements</p>
            </div>
          </div>
          <div className="Textual-inputs">
            <div className="text-Textual">
              <div className="card-title">
                <h5>Textual inputs</h5>
              </div>
              <p className="card-title-desc">
                Here are examples of <span>.form-control</span> applied to each
                textual HTML5 <span>input type</span>
              </p>
            </div>
            <div className="form-Textual-inputs">
              <label htmlFor="">Text</label>
              <br />
              <input type="text" placeholder="Artisanal kale" />
              <br />
              <label htmlFor="">Search</label>
              <br />
              <input type="text" placeholder="How do I shoot web" />
              <br />
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="bootstrap@example.com" />
              <br />
              <label htmlFor="">URL</label>
              <br />
              <input type="text" placeholder="https://getbootstrap.com" />
              <br />
              <label htmlFor="">Telephone</label>
              <br />
              <input type="text" placeholder="1-(555)-555-5555" />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="text" placeholder="............" />
              <br />
              <label htmlFor="">Number</label>
              <br />
              <input type="text" placeholder="42" />
              <br />
              <label htmlFor="">Date and time</label>
              <br />
              <input type="datetime-local" />
              <br />
              <label htmlFor="">Date</label>
              <br />
              <input type="date" />
              <br />
              <label htmlFor="">Month</label>
              <br />
              <input type="month" />
              <br />
              <label htmlFor="">Week</label>
              <br />
              <input type="week" />
              <br />
              <label htmlFor="">Time</label>
              <br />
              <input type="time" />
              <br />
              <label htmlFor="">Color picker</label>
              <br />
              <input type="color" className="input-color" placeholder="42" />
              <br />
              <label htmlFor="">Select</label>
              <select className="select">
                <option value="">Select</option>
                <option value="">Large select</option>
                <option value="">Small select</option>
              </select>
              <label htmlFor="">Datalists</label>
              <br />
              <input type="text" placeholder="Type to search..." />
            </div>
          </div>
          <div className="Textual-inputs">
            <div className="text-Textual">
              <div className="card-title">
                <h5>Sizing</h5>
              </div>
              <p className="card-title-desc">
                Set heights using className like <span>.form-control-lg</span>
                and
                <span>.form-control-sm</span>
              </p>
            </div>
            <div className="form-Textual-inputs">
              <label htmlFor="">Default input</label>
              <br />
              <input type="text" placeholder="Default input" />
              <label htmlFor="">Form Small input</label>
              <br />
              <input type="text" placeholder=".form-control-sm" />
              <label htmlFor="">Form Large input</label>
              <br />
              <input type="text" placeholder=".form-control-lg" />
            </div>
          </div>
          <div className="Textual-inputs">
            <div className="text-Textual">
              <div className="card-title">
                <h5>Range Inputs</h5>
              </div>
              <p className="card-title-desc">
                Create custom <span>input type="range“</span> controls with
                <span>.form-range</span>
              </p>
            </div>
            <div className="form-Textual-inputs">
              <label htmlFor="">Example range</label>
              <br />
              <input type="range" placeholder=".form-control-lg" />
              <label htmlFor="">Disabled Range</label>
              <br />
              <input type="range" placeholder=".form-control-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsElements;
