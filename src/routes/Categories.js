import { useDispatch } from 'react-redux';

import { checkStatus } from '../reducers/categories/categories';

import Header from '../components/Header';

const Button = {
  padding: '2em',
  backgroundColor: 'lightblue',
  fontSize: '2em',
  cursor: 'pointer',
};

const Container = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2em',
};

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatusBtn = () => {
    dispatch(checkStatus('CHECK_STATUS'));
  };

  return (
    <>
      <Header />
      <div style={Container}>
        <button onClick={checkStatusBtn} style={Button} type="button">Check Status</button>
      </div>
    </>
  );
};

export default Categories;
