
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer>
         </ToastContainer>
          <Header></Header>
          <Body></Body>   
          <Footer></Footer> 
      </BrowserRouter>
         
    </div>
  );
}

export default App;
