import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SingleBook from './singleBook';
import { renderBooks } from '../redux/books/books';

const BookRender = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renderBooks());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {Object.keys(books).length > 0 && Object.keys(books).map((id) => (
          <div key={id}>
            <SingleBook
              itemId={id}
              title={books[id][0].title}
              author={books[id] && books[id][0] && books[id][0].author}
              category={books[id][0].category}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookRender;
