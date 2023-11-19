import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Whatwedo from './components/Whatwedo';
import Services from './components/Services';
import Cocoa from './components/Cocoa';
import Plans from './components/Plans';
import Clients from './components/Clients';
import Keep from './components/Keep';
import Landingpage from './components/Landingpage';
import ScrollReveal from 'scrollreveal';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Welcome/>
     <Whatwedo/>
     <Services/>
     <Cocoa/>
     <Plans/>
     <Clients/>
     <Keep/>
     <Footer/>
    </div>
  );
}

export default App;
