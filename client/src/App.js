import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";
import BookList from "./components/BookList";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>GraphQL / React Reading List</h1>
        <hr />
        <BookList />
      </ApolloProvider>
    </div>
  );
}

export default App;
