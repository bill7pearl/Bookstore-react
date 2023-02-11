import React from 'react';
import Form from './Form';
import BookRenderer from './bookRenderer';

const HomePage = () => (
  <>
    <div>
      <BookRenderer />
    </div>
    <div className="form-container">
      <Form />
    </div>
  </>
);

export default HomePage;
