import React from 'react';

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Chat, Join } from './components';

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    );
  }

export default App;