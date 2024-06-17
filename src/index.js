
import ReactDOM from 'react-dom/client';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import './index.css';
import Cards from './components/Cards/Cards';
import Screen from './views/Screen/Screen';
import VaishnaviImg from "./components/Cards/Student_img/Vaishnavi.jpeg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar name="Vaishnavi Gundgire "/>
    <div className="card-container">
      <div className='left-container'>
        <Screen/>
      </div>
      <div className='right-container'>
        <Cards StudentName="Vaishnavi Gundgire" StudentImg={VaishnaviImg}/>
        <Cards StudentName="Liam Smith" StudentImg="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"/>
        <Cards StudentName="Ava Miller" StudentImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4LKiX4XXOxBpMfMC62i-NoIhIsExrnMZSZpnnr8KVxVBTuCDuUFZsUdhY9Wk4qaaiEg&usqp=CAU"/>
        <Cards StudentName="Noah Anderson" StudentImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa31xKmnI6rYS9nSNXJNOewF7o1E49L6r_Q&s"/>
        <Cards StudentName="Mason Taylor" StudentImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEjoPV0LSFFVpaHXtFwdDGOczYXCIwZmi-Q&s"/>
        <Cards StudentName="Olivia Davis" StudentImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5TmPdRp9mhJQ4Unm0a8Bh0OXTRWHMNz0hQ&s"/>
      </div>
    </div>
    <Footer/>

  </>
);

