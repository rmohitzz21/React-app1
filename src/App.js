import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="MyApp"/>
    <div className='container my-3'></div>
    <TextForm heading="Enter Text To Analyze"></TextForm>
  </>
  );
}

export default App;
