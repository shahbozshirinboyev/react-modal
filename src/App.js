import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false)

  const modalClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
      <button onClick={() => setShowModal(true)}>
        <i class="bi bi-hr"></i> Open Modal
      </button>
      { showModal && <Modal modalClose={modalClose}>
        <h3>Shahboz's Telegram Account</h3>
        <a href="https://t.me/sh_shirinboyev"><i class="bi bi-arrow-up-right"></i> Show Account</a>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam modi debitis, pariatur cupiditate veniam officia.</p>
      </Modal> }
    </div>
  );

}

export default App;
