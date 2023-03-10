import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const id = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Drama');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      itemId: id(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <main className="form-inputs">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Add author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
        />
        <button className="form-btn" type="submit">ADD BOOK</button>
      </form>
    </main>
  );
}

export default Form;
