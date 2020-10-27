const graphql = require("graphql");
// const Book = require("../models/book.model");
// const Author = require("../models/author.model");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// Book Data
const books = [
  {
    id: "1",
    name: "Rich Dad, Poor Dad",
    genre: "self help",
    authorid: "1",
  },
  {
    id: "2",
    name: "The Obstacle Is The Way",
    genre: "self help",
    authorid: "2",
  },
  {
    id: "3",
    name: "4 Hour Work Week",
    genre: "self help",
    authorid: "3",
  },
  {
    id: "4",
    name: "Harry Potter",
    genre: "fantasy",
    authorid: "4",
  },
  {
    id: "5",
    name: "Ego Is The Enemy",
    genre: "self help",
    authorid: "2",
  },
  {
    id: "6",
    name: "Shoe Dog",
    genre: "autobiography",
    authorid: "5",
  },
];

// Author Data
const authors = [
  {
    id: "1",
    name: "Robert Kiyosaki",
    age: 60,
  },
  {
    id: "2",
    name: "Ryan Holiday",
    age: 33,
  },
  {
    id: "3",
    name: "Tim Ferriss",
    age: 43,
  },
  {
    id: "4",
    name: "JK Rowling",
    age: 55,
  },
  {
    id: "5",
    name: "Phil Knight",
    age: 70,
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authors.find((author) => author.id === parent.authorid);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return books.filter((book) => book.authorid === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // TODO: Get data from db
        return books.find((book) => book.id === args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // TODO: Get data from db
        return authors.find((author) => author.id === args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // TODO: Get data from db
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        // TODO: Get data from db
        return authors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
