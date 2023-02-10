import React from 'react';
import Form from './Form';
import BookRenderer from './bookRender';

const HomePage = () => (
  <>
    <div>
      <BookRenderer />
    </div>
    <div>
      <Form />
    </div>
  </>
);

export default HomePage;
