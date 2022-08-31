import "./App.css";
import React, { useState } from "react";
import CONTACTDATA from "./USERDATA.json";
import Avatar /* , { genConfig } */ from "react-nice-avatar";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [elementNum, setElementNum] = useState(5);
  const loadMore = () => {
    setElementNum(elementNum + 5);
  };

  const JSONslice = CONTACTDATA.slice(0, elementNum);

  return (
    <div className="App">
      <div className="header">
        <div className="header-info">
          <h1>Info on users</h1>
          <ul>
            <li>Names</li>
            <p>/</p>
            <li>Jobs</li>
            <p>/</p>
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
                {info.first_name} {info.last_name}
              </h1>
              <p>#{id + 1}</p>
            </div>
            <div className="accordion accordion-pers-info">
              <Accordion
                title="Personnal Info"
                content={`
                <p>Username: <span>${info.username}</span></p>
                <p>Gender: <span>${info.gender}</span></p>
                <p>First Language : <span>${info.language}</span></p>
                <p>Favorite color: <span>${info.favColor}</span></p>`}
              />
            </div>
            <div className="accordion accordion-prof-info">
              <Accordion
                title="Professional Info"
                content={`
                  <p>Works in: <span>${info.department}</span></p>
                  <p>Company: <span>${info.company}</span></p>
                  <p>Higher education at: <span>${info.university}</span></p>`}
              />
            </div>
            <div className="accordion accordion-contact">
              <Accordion 
                title="Contact" 
                content={`
                  <p>Email: <span>${info.email}</span></p>
                  <p>Phone number: <span>${info.phone}</span></p>
                  <p>Location: <span>${info.location}</span></p>`}
              />
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
