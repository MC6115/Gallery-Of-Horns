import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import { useState } from 'react';
import SelectBeast from './Select-beast';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [clickedCard, setClickedCard] = useState({});

  function mostrarModal(beast) {
      setClickedCard(beast);
      setDisplayModal(true);
    
  }

  function cerrarModal() {
    setDisplayModal(false);
  }

  return (
    <>
      <Header />
      <Gallery mostrarModal={mostrarModal}/>
      <SelectBeast selectedBeast={clickedCard} show={displayModal} cerrarModal={cerrarModal}/>
      <Footer />
    </>
  );
}

export default App;
