import { useState } from 'react';
import Book from './Book';

const BooksList = ({ books }) => {
    return (
        <ul className='mb-12 select-none'>
            {books.map((book) => {
                return <Book book={book} key={book.id}/>;
            })}
        </ul>
    );
};

export default BooksList;
