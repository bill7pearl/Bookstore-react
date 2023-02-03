import { useSelector } from 'react-redux';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);

  return (
    <div>
      <div />
      <div><p>{categories}</p></div>
      <div><p>{message}</p></div>
    </div>
  );
};

export default Categories;
