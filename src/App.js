import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
   const [add, setAdd] = useState(false);
  return (
  
    <div className="App">
    <Modal add={add}  setAdd={setAdd}/>
      <button className='btn' onClick={() => setAdd(true)}>Открыть модальное окно</button>
    </div>
  );
}

export default App;
