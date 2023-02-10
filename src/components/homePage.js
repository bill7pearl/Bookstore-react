import React from 'react';
import Form from './Form';
import BookRender from './bookRender';

const HomePage = () => (
  <>
    <div>
      <BookRender />
    </div>
    <div>
      <Form />
    </div>
  </>
);

export default HomePage;
