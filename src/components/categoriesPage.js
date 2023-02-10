import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatusCheck from '../redux/categories/categories';

const Categories = () => {
  const { categories, msg } = useSelector((state) => state.categories);
  const [checking, setIsChecking] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setIsChecking(true);
    dispatch(StatusCheck());
  };

  return (
    <div>
      <button type="button" onClick={handleCheck}>
        {checking ? 'Checking...' : 'Check status'}
      </button>
      <div>{categories}</div>
      <div>{msg}</div>
    </div>
  );
};

export default Categories;
