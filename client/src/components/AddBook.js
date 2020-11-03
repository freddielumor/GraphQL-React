import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_AUTHORS_QUERY,
  ADD_BOOK_MUTATION,
  GET_BOOKS_QUERY,
} from "../queries/queries";

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  const [addBook] = useMutation(ADD_BOOK_MUTATION);

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
    addBook({
      variables: { name: bookName, genre: bookGenre, authorid: bookAuthor },
      refetchQueries: [{ query: GET_BOOKS_QUERY }], // Refetch queries after mutation
    });

    setBookName("");
    setBookGenre("");
    setBookAuthor("");
  };

  return (
    <form className="AddBook__form" onSubmit={handleFormSubmit}>
      <div className="AddBook__field">
        <label>Name: </label>
        <input type="text" onChange={handleSetBookName} />
      </div>

      <div className="AddBook__field">
        <label>Genre: </label>
        <input type="text" onChange={handleSetBookGenre} />
      </div>

      <div className="AddBook__field">
        <label>Author: </label>
        <select onChange={handleSetBookAuthor}>
          <option value="">Select Author</option>
          {data.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>

      <button
        className="AddBook__submit"
        type="submit"
        disabled={!bookName || !bookGenre || !bookAuthor}
      >
        +
      </button>
    </form>
  );
}
