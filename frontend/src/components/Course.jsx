import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl pt-10 md:text-4xl">
            Welcome to Our bookStore
          </h1>
          <h2 className="text-xl md:text-3xl text-pink-500 mt-3">
            Explore and Enjoy!
          </h2>
          <p className="text-base mt-5 md:mt-12">
            Discover a wide variety of books to suit every taste and interest.
            Whether you're looking for the latest bestseller, a classic novel,
            or a fascinating non-fiction read, we've got something for everyone.
            Dive into our collection and find your next great read today!
          </p>
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="my-10 items-center justify-center text-center">
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
