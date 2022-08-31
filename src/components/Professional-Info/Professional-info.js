import React from "react";
import JSONDATA from "../../Users.json";

function ProfInfo() {
  return (
    <div>
      {JSONDATA.map((info, id) => (
        <div>
          <p>
            Works in: <span>{info.departement}</span>
          </p>
          <p>
            Company: <span>{info.worksAt}</span>
          </p>
          <p>
            Higher education at: <span>{info.higherEducation}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProfInfo;
