import React, { useState } from "react";
import { Users } from "../Users";
import { NavBar } from "../navBar";

const InfoPage: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleMinus = (value: number) => {
    if (!count) return;
    setCount((perv) => perv - value);
  };

  const handlePlus = (value: number) => {
    setCount((perv) => perv + value);
  };

  return (
    <div>
      <NavBar />
      <h1>Count {count}</h1>
      <div>
        <span
          onClick={() => handlePlus(1)}
          style={{ fontSize: "40px", margin: "0 20px", cursor: "pointer" }}
        >
          +
        </span>
        <span
          onClick={() => handleMinus(1)}
          style={{ fontSize: "40px", cursor: "pointer" }}
        >
          -
        </span>
      </div>
      <Users currentCount={count} />
    </div>
  );
};

export default InfoPage;
