import { useState } from 'react';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);

  return (
    <div className="main-container2">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" onChange={updateTitle} value={title} />
        <input type="text" placeholder="Add author" onChange={updateAuthor} value={author} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
