import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import './App.css';

function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    </Routes>
    </div>
    <Footer />
    </Router>
    )
  }
export default App;
