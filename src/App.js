import "./App.css";
/* import { useState } from "react"; */
import JSONDATA from "./Users.json";
import { BigHead } from '@bigheads/core';

function App() {
  return (
    <div className="App">
      {/* <BigHead /> */}
      {JSONDATA.map((info, id) => (
        <div className="user-preview" key={id}>
          <div className="profile-picutre">
          <img src={info.avatar} alt="avatar" />
            <BigHead />
          </div>     
          <div class="right-side">
            <div className="name">
              <h1>{info.fullName}</h1>
            </div>
            <div className="info">
              <div className="main-info">
                <h2>Personnal Info</h2>
                <p className="gender ">Gender: <span>{info.gender}</span></p>
                <p className="language">First Language : <span>{info.mainLanguage}</span></p>
                <p className="password">
                  password <span>{info.password}</span>
                </p>
              </div>
              <div className="second-based-info">
                <h2>Professional Info</h2>
                <p className="company">
                  Company: <span>{info.worksAt}</span>
                </p>
                <p className="work-field">
                  Works in: <span>{info.departement}</span>
                </p>
                <p className="education">
                  Higher education at: <span>{info.higherEducation}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
