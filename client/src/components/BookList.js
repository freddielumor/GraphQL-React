import React from "react";
import { gql, useQuery } from "@apollo/client";

const BOOK_QUERY = gql`
  query {
    books {
      name
      id
      genre
    }
  }
`;

export default function BookList() {
  const { loading, error, data } = useQuery(BOOK_QUERY);

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
