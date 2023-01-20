import { useState, useEffect } from "react";

export const App = () => {
  const [description, setDescription] = useState([]);

  const getdata = async () => {
    const response = await fetch("http://localhost:3000/description");
    const data = await response.json();
    console.log(data);
    setDescription(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {description.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};
