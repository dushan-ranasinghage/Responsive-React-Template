import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Widget1 from './components/widget1'
import About from './components/About'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import Footer from './components/Footer'

ReactDOM.render(
  <div>
    <Navbar />
    <Slider />
    <Widget1 />
    <About />
    <FirstSection />
    <SecondSection />
    <Footer />
  </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
