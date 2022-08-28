import "./App.css";
/* import { useState } from "react"; */
import JSONDATA from "./Users.json";
import { BigHead } from '@bigheads/core';
import Avatar, { genConfig } from 'react-nice-avatar'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-info">
          <h1>Info on users</h1>
          <ul>
            <li>Names</li>
            <li>Jobs</li>
            <li>Languages</li>
          </ul>
        </div>
        <div className="blackline"></div>
      </div>
      {JSONDATA.map((info, id) => (
        <div className="user-preview" key={id}>
          <div className="profile-picutre">
          </div> 
          {/* <BigHead className="bighead" />   */} 
          <div className="avatar">
            <Avatar className="bighead"/>
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
