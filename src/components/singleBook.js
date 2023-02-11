import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import circle from '../images/circle.png';

const SingleBook = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(itemId));
  };

  return (
    <main className="books-card">
      <div className="single-book-container">
        <div>
          <h4 className="single-book-category">{category}</h4>
          <h2 className="single-book-title">{title}</h2>
          <p className="single-book-author">{author}</p>
          <div className="single-book-action-container">
            <button className="single-book-actions" type="submit">Comments</button>
            <button className="single-book-actions" type="submit" onClick={handleRemove}>Remove</button>
            <button className="single-book-actions" type="submit">Edit</button>
          </div>
        </div>
        <div className="r-side">
          <div className="percentage">
            <img src={circle} alt="circle" />
            <p>7% Completed</p>
          </div>
          <div className="progress">
            <p>CURRENT CHAPTER</p>
            <p>CHAPTER 17</p>
            <button className="progress-btn" type="submit">UPDATE PROGRESS</button>
          </div>
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
