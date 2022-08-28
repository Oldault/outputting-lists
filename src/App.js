import "./App.css";
/* import { useState } from "react"; */
import JSONDATA from "./Users.json";

function App() {
  return (
    <div className="App">
      {JSONDATA.map((info, id) => (
        <div className="user-preview" key={id}>
          <div className="profile-picutre">
            <img src={info.avatar} alt="avatar" />
          </div>
          <div className="info">
            <div className="main-info">
              <h1>{info.fullName}</h1>
              <h2>Gender: {info.gender}</h2>
              <p className="language">First Language : {info.mainLanguage}</p>
              <p className="work-field">
                Works in: <span>{info.departement}</span>
              </p>
            </div>
            <div className="second-based-info">
              <p className="company">
                Company: <span>{info.worksAt}</span>
              </p>
              <p className="education">
                Higher education at: <span>{info.higherEducation}</span>
              </p>
              <p className="password">
                password <span>{info.password}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
