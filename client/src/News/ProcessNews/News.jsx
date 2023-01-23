import "./News_Styles.css"
import { useState, useEffect } from "react";

export const News = () => {
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
          <div >
            <img src={item.image}/>
            <p>{item.title}</p>
            <a href={item.href}>read more</a>
          </div>
        );
      })}
    </>
  );
};
