import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Listfilm from './components/liste/films';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Listfilm/>
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
