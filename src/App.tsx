import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll,Rotate,Slide,Zoom } from 'react-awesome-reveal'


function App() {
  return (
    <>
      <Header />
      <Roll>
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </Roll>
    </>
  );
}

export default App;
