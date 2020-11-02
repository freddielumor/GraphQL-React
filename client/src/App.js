import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <h1>GraphQL / React Reading List</h1>
      <hr />
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
