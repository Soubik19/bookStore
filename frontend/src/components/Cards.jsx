import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card w-82 h-120 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="h-80 overflow-hidden">
            <img
              className="h-full object-cover"
              src={item.image}
              alt={item.name}
            />
          </figure>
          <div className="card-body h-60 ">
            <h2 className="card-title flex justify-between">
              <span>{item.name}</span>
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="flex-grow">{item.title}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline mt-1">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
