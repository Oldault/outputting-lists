import "./App.css";
import { useState } from "react";
import JSONDATA from "./Users.json";

function App() {
  const [info, setInfo] = useState([
    {
      fullName: "Elvera Thackston",
      departement: "Human Resources",
      worksAt: "Rosenbaum Inc",
      id: 1,
    },
    {
      fullName: "Verge Gherardesci",
      departement: "Training",
      worksAt: "Becker-Adams",
      id: 2,
    },
    {
      fullName: "Farica Chalfant",
      departement: "Support",
      worksAt: "Schimmel, Wiza and Aufderhar",
      id: 3,
    },
    {
      fullName: "Elwin Guinane",
      departement: "Business Development",
      worksAt: "Koepp, Swaniawski and Ritchie",
      id: 4,
    },
    {
      fullName: "Torr Tappington",
      departement: "Business Development",
      worksAt: "Klein-Stiedemann",
      id: 5,
    },
  ]);

  return <div className="App">
    {info.map((info) =>(
      <div className="info-preview" key={info.id} >
        <h1>{ info.fullName }</h1>
        <p>Works in: <span>{info.departement}</span></p>
        <p>Company: <span>{info.worksAt}</span></p>
      </div>
    ))}
  </div>;
}

export default App;
