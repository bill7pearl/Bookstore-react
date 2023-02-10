import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const id = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      itemId: id(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Add author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
