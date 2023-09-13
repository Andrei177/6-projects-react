import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
    {active && <Modal active={active} setModal={setActive}/>}
      <button className='btn' onClick={() => {console.log('click'); setActive(true)}}>Открыть модальное окно</button>
    </div>
  );
}

export default App;
