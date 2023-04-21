import { useState } from 'react';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ModalWindow from './components/ModalWindow/ModalWindow';



function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts setShowModal={setShowModal} />
      <Footer />
      <ModalWindow setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}

export default App;
