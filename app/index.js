'use strict';

import './css/normalize.css';
import './css/skeleton.css';
import './css/additional.css';
import './css/style.css';
import './css/player.css';

import React from 'react';
import ReactDOM from 'react-dom';
// import Mosaic from 'mosaic-video';
import Mosaic from './js/components/mosaic-video';

const App = () => (
  <section>
  </section>
);

ReactDOM.render(<App/>, document.getElementById('player-container'));
