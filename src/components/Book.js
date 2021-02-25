import React from 'react';

const Book = (props) => {
    return (
        <li>{`id: ${props.id} - book: ${props.title} - author: ${props.author}`}</li>
    );
}

export default Book;