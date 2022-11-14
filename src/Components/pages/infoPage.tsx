import React, { useState } from "react";

const InfoPage: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleMinus = (value: number) => {
    setCount((perv) => perv - value);
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <span>+</span>
      <span onClick={() => handleMinus(1)}>-</span>
    </div>
  );
};

export default InfoPage;
