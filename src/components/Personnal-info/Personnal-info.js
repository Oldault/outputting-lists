import React from "react";
import JSONDATA from "../../Users.json";

function PersInfo() {
  return (
    <div>
      {JSONDATA.map((info, id) => (
        <div>
          <p>
            Gender: <span>{info.gender}</span>
          </p>
          <p>
            First Language : <span>{info.mainLanguage}</span>
          </p>
          <p>
            password <span>{info.password}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default PersInfo;
