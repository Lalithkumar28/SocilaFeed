import './styles/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';
import {useState} from 'react';
function App() {
  const [toggleCheck, setToggleCheck]=useState(false)
  const displaySidebar=()=>
  {
    setToggleCheck(!toggleCheck);
  }
  return (
    <>
      <Header onClick={displaySidebar}/>
    <div className="body-flex">
      <Sidebar checkNavbar={toggleCheck}/>
      <Mainbar/>
    </div>

    </>
  );
}

export default App;
