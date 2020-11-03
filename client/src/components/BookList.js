import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";
import BookDetails from "./BookDetails";

export default function BookList() {
  const [bookId, setBookId] = useState(null);
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  if (loading) return <p>LOADING.....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className="BookList">
      <ul className="BookList__list">
        {data.books.map((book) => {
          return (
            <li key={book.id} onClick={() => setBookId(book.id)}>
              <h3>Name: {book.name}</h3>
            </li>
          );
        })}
      </ul>
      {!bookId ? <p>No Book Selected...</p> : <BookDetails bookId={bookId} />}
    </div>
  );
}
