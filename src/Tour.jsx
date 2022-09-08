import React, { useState } from "react";

export default function Tour(props) {
  return (
    <div className="bg-white mb-6  rounded-xl shadow-xl">
      <div className="h-80">
        <img
          className="w-full h-full rounded-t-xl object-cover object-center"
          src={props.data.image}
          alt="image"
          aria-hidden="true"
        />
      </div>
      <div className="p-8 text-center">
        <div className="flex justify-between items-start">
          <h4 className="font-bold">{props.data.name}</h4>
          <span className="relative bottom-2 text-lg bg-primary px-2 rounded-sm text-primary font-bold">
            ${props.data.price}
          </span>
        </div>
        {props.isShortenText ? (
          <p className="text-left text-base mt-2">
            {props.data.info.substring(0, 200)} ...
            <span
              className="text-primary cursor-pointer"
              onClick={() => props.handleToggleText(props.index)}
            >
              Read more
            </span>
          </p>
        ) : (
          <p className="text-left text-base mt-2">
            {props.data.info}{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => props.handleToggleText(props.index)}
            >
              Show less
            </span>
          </p>
        )}

        <button
          onClick={() => {
            props.handleClick(props.index);
          }}
          className="text-lg border font-normal pb-1 px-12 rounded-md btn-primary"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
