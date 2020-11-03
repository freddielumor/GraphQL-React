import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  query {
    books {
      name
      id
      genre
    }
  }
`;

export const GET_BOOK_QUERY = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const GET_AUTHORS_QUERY = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorid: ID!) {
    addBook(name: $name, genre: $genre, authorid: $authorid) {
      name
      id
    }
  }
`;
