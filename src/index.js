
import ReactDOM from 'react-dom/client';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import './index.css';
import Cards from './components/Cards/Cards';
import Screen from './views/Screen/Screen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar name="Vaishnavi Gundgire "/>
    <div className="card-container">
      <div className='left-container'>
        <Screen/>
      </div>
      <div className='right-container'>
        <Cards StudentName="Vaishnavi Gundgire"/>
        <Cards StudentName="Vaishnavi Gundgire"/>
        <Cards StudentName="Vaishnavi Gundgire"/>
        <Cards StudentName="Vaishnavi Gundgire"/>
        <Cards StudentName="Vaishnavi Gundgire"/>
        <Cards StudentName="Vaishnavi Gundgire"/>
      </div>
    </div>
    <Footer/>

  </>
);

