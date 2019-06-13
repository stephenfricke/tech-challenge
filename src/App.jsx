import React from 'react';
import Carousel from './components/Carousel';
import TopNav from './components/TopNav';
import TopSection from './components/TopSection';
import SecondarySections from './components/SecondarySections';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
  <React.Fragment>
    <TopNav />
    <Carousel />
    <TopSection />
    <SecondarySections />
    <Footer />
  </React.Fragment>
);

export default App;
