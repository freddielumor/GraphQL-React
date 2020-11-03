import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  if (loading) return <p>LOADING.....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div>
      <ul className="bookList">
        {data.books.map((book) => {
          return (
            <li key={book.id}>
              <h3>Name: {book.name}</h3>
              <p>Genre: {book.genre}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
