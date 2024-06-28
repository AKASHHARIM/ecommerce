import './App.css';
import Productlist from './pages/Productlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            <Header/>
         <Productlist/>
         <Footer/>

    </div>
  );
}

export default App;
