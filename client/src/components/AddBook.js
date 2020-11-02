import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_AUTHORS_QUERY = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);

  if (loading) return <p>LOADING.....</p>;
  if (error) return <p>ERROR</p>;

  const handleSetBookName = (e) => {
    setBookName(e.target.value);
  };

  const handleSetBookGenre = (e) => {
    setBookGenre(e.target.value);
  };

  const handleSetBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send data to BE
    console.log("Submit Form!");
  };

  console.log(data);
  console.log("bookName", bookName);
  console.log("bookGenre", bookGenre);
  console.log("bookAuthor", bookAuthor);

  return (
    <form id="addBook__form" onSubmit={handleFormSubmit}>
      <div>
        <label>Name</label>
        <input type="text" onChange={handleSetBookName} />
      </div>

      <div>
        <label>Genre</label>
        <input type="text" onChange={handleSetBookGenre} />
      </div>

      <div>
        <label>Author</label>
        <select onChange={handleSetBookAuthor}>
          <option>Select Author</option>
          {data.authors.map((author) => {
            return (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>

      <input type="submit" />
    </form>
  );
}
