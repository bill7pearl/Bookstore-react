import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './singleBook';

const BookRender = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div>
        {books.map((book) => (
          <SingleBook
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
    </>
  );
};

export default BookRender;
