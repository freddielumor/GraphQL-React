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

export const GET_AUTHORS_QUERY = gql`
  query {
    authors {
      name
      id
    }
  }
`;
