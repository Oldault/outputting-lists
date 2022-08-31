import "./App.css";
import React, { useState } from "react";
import JSONDATA from "./Users.json";
import CONTACTDATA from "./USERDATA.json";
import Avatar /* , { genConfig } */ from "react-nice-avatar";
import Accordion from "./components/Accordion/Accordion";
import PersInfo from "./components/Personnal-info/Personnal-info";

function App() {
  const [elementNum, setElementNum] = useState(5);
  const loadMore = () => {
    setElementNum(elementNum + 5);
  };

  const JSONslice = JSONDATA.slice(0, elementNum);

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
      {JSONslice.map((info, id) => (
        <div className="user-preview" key={id}>
          <div className="avatar">
            <Avatar className="bighead" />
          </div>
          <div class="right-side">
            <div className="name">
              <h1>
                {info.fullName} #{id + 1}
              </h1>
            </div>
            <div className="accordion accordion-pers-info">
              <Accordion
                title="Personnal Info"
                content={`<p>Gender: <span>${info.gender}</span></p>
                <p>First Language : <span>${info.mainLanguage}</span></p>
                <p>password <span>${info.password}</span></p>`}
              />
            </div>
            <div className="accordion accordion-prof-info">
              <Accordion
                title="Professional Info"
                content={`<p>Works in: <span>${info.departement}</span></p>
                  <p>Company: <span>${info.worksAt}</span></p>
                  <p>Higher education at: <span>${info.higherEducation}</span></p>`}
              />
            </div>
            <div className="accordion accordion-contact">
              <Accordion title="Contact" content="Coming Soon ;)" />
            </div>
          </div>
        </div>
      ))}

      <button className="button" onClick={() => loadMore()}>
        Load more
      </button>
    </div>
  );
}

export default App;
