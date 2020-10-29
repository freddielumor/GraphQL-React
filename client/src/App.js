import React from "react";
import { gql, useQuery } from "@apollo/client";
// import BookList from "./components/BookList";

const BOOK_QUERY = gql`
  query {
    books {
      name
      id
      genre
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(BOOK_QUERY);

  if (loading) return <p>LOADING.....</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className="App">
      <h1>GraphQL / React Reading List</h1>
      <hr />
      {/* <BookList /> */}
      {data.books.map((book) => {
        return (
          <div key={book.id}>
            <h3>Name: {book.name}</h3>
            <p>Genre: {book.genre}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
