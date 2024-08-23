import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import hornedBeast from './hornedBeast.json';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import { useState } from 'react';
import SelectBeast from './Select-beast';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [clickedCard, setClickedCard] = useState({});

  function mostrarModal(name) {
    const namedBeast = hornedBeast.find(beast => beast.title === name);
    if (namedBeast) {
      setClickedCard(namedBeast);
      setDisplayModal(true);
    }
  }

  function cerrarModal() {
    setDisplayModal(false);
    console.log("intento de cierre");
  }

  return (
    <>
      <Header />
      <Gallery mostrarModal={mostrarModal} allBeast={hornedBeast} />
      <SelectBeast selectedBeast={clickedCard} show={displayModal} cerrarModal={cerrarModal}/>
      <Footer />
    </>
  );
}

export default App;
