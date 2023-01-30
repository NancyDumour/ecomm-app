import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ categoryId, sort, maxPrice }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 10,
      price: 8,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Dress",
      oldPrice: 10,
      price: 8,
    },
  ];
  return (
    <div className="list">
      {data.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
