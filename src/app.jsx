import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import OneVsOne from './components/1vs1';
import Depositos from './components/Depositos';
import Torneos from './components/Torneos';
import SobreNosotros from './components/SobreNosotros';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/1vs1" element={<OneVsOne />} />
          <Route path="/depositos" element={<Depositos />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;