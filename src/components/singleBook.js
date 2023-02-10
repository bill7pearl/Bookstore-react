import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const SingleBook = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(itemId));
  };

  return (
    <main>
      <div>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button type="submit">Comments</button>
          <button type="submit" onClick={handleRemove}>Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
    </main>
  );
};

SingleBook.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SingleBook;
