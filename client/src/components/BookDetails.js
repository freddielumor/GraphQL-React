import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK_QUERY } from "../queries/queries";

export default function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    variables: {
      id: bookId,
    },
  });

  if (loading) return <p>LOADING.....</p>;
  if (error) return <p>ERROR</p>;

  const renderBookDetails = () => {
    const { book } = data;

    if (book) {
      return (
        <>
          <h3>{book.name}</h3>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books By This Author</p>
          <ul className="BookDetails__books">
            {book.author.books ? (
              book.author.books.map((book) => {
                return <li key={book.id}>{book.name}</li>;
              })
            ) : (
              <p>No Books</p>
            )}
          </ul>
        </>
      );
    }
  };

  return (
    <div className="BookDetails">
      <h2>Book Details</h2>
      {renderBookDetails()}
    </div>
  );
}
