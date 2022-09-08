import React from "react";
import Tour from "./Tour";
import { useState, useEffect } from "react";
const Tours = ({ data }) => {
  const [imgs, setImgs] = useState(() => {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      tmp.push({
        isDisplay: true,
        isShortenText: true,
      });
    }
    return tmp;
  });

  const tourElements = data.map(
    (item, index) =>
      imgs[index].isDisplay && (
        <Tour
          key={item.id}
          index={index}
          handleClick={handleClick}
          handleToggleText={handleToggleText}
          isShortenText={imgs[index].isShortenText}
          data={item}
        />
      )
  );

  function handleClick(index) {
    setImgs((imgs) => {
      imgs[index].isDisplay = false;
      return [...imgs];
    });
  }

  function handleToggleText(index) {
    setImgs((imgs) =>
      imgs.map((img, i) =>
        i == index ? { ...img, isShortenText: !img.isShortenText } : img
      )
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="font-bold text-primary text-center under-line mb-12">
        Our Tours
      </h2>
      <div>{tourElements}</div>
    </div>
  );
};

export default Tours;
