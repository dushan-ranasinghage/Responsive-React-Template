import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import Footer from './components/Footer'
import Widget from './components/widget'

ReactDOM.render(
  <div>
    <Navbar />
    <Slider />
    <FirstSection />
    <SecondSection />
    <Widget />
    <Footer />
  </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
