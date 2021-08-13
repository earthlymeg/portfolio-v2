import { useEffect, useState } from 'react';
import AOS from 'aos';
import './App.css';
import Header from './components/Header';
import ExperiencePage from './components/ExperiencePage';
import Footer from './components/Footer';
import Loader from './components/Loader';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div className='App'>
      {isLoading ? <Loader /> :

        (
          <>
            <Header />
            <ExperiencePage />
            <Footer />
          </>
        )
      }
    </div>
  );
}

export default App;
