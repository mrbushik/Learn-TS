import React, { useEffect, useState } from "react";

type UsersProps = {
  currentCount: number;
};
type user = {
  title?: string;
  body?: string;
};

export const Users: React.FC<UsersProps> = ({ currentCount }) => {
  const [userInfo, setUserInfo] = useState<user>({});

  useEffect(() => {
    console.log("change");
    handleUpdate();
  }, [currentCount]);

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentCount}`)
      .then((response) => response.json())
      .then((json) => setUserInfo(json));
  };
  return (
    <div>
      {Object.keys(userInfo) && (
        <div>
          <h3>{userInfo.title}</h3>
          <p>{userInfo.body}</p>
        </div>
      )}
    </div>
  );
};
