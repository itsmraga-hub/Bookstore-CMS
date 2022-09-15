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

const Categories = () => (
  <>
    <Header />
    <div style={Container}>
      <button style={Button} type="button">Check Status</button>
    </div>
  </>
);

export default Categories;
