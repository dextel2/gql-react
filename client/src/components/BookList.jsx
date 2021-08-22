import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
    {
        books {
            name
            id
            genre
            author {
                name
                age
                id
            }
        }
    }
`;
const BookList = (props) => {
    const displayBooks = () => {
        const data = props.data;
        if (data.loading) {
            return <h1>Loading....</h1>;
        } else {
            return data.books.map((book, key) => {
                return <li key={book.id}>{book.name}</li>;
            });
        }
    };
    return (
        <div>
            <ul id="bookList">{displayBooks()}</ul>
        </div>
    );
};

export default graphql(getBooksQuery)(BookList);
