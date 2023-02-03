import PropTypes from 'prop-types';

function Book({
  author, title,
}) {
  return (
    <>
      <div className="main-container">
        <div className="info">
          <div className="info1">
            <div>
              <h3 className="title">{title}</h3>
              <p className="author">{author}</p>
            </div>
            <div className="buttons">
              <button type="button">Comments</button>
              <button type="button">
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
        </div>
        <div className="info2">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
