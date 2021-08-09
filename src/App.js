import { useEffect } from 'react';
import AOS from 'aos';
import './App.css'
import Header from './components/Header'
import ExperiencePage from './components/ExperiencePage';
import Footer from './components/Footer'

function App() {

  useEffect( () => {
    AOS.init();
  }, [])
  
  return (
    <div className='App'>
    <Header />
    <ExperiencePage/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
