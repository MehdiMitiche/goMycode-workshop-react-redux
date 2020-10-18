import React from "react";
import "./books.css";
import BookCard from "../BookCard";
import AddBook from "../AddBook";
import { useSelector } from "react-redux";

const Books = ({ styles }) => {
  const { books } = useSelector((state) => state.book);
  const { title, author } = useSelector((state) => state.filter);
  return (
    <div style={{ ...styles }}>
      <div className="add-book-container">
        <AddBook />
      </div>
      <div className="books-container">
        {!books || books.length === 0 ? (
          <div>No Data To Display</div>
        ) : (
          <>
            {books
              .filter(
                (elem) =>
                  elem.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
              )
              .filter(
                (elem) =>
                  elem.author.toLowerCase().indexOf(author.toLowerCase()) !== -1
              )
              .map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  voters={book.voters}
                  description={book.description}
                  img={book.img}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Books;
