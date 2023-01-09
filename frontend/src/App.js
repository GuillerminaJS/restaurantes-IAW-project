// React stuff & imports
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// ...

// Components
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
// ...

// Pages
import MainPage from './pages/MainPage/MainPage';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Contacto from './pages/Contacto/Contacto';
// ...

// Policy
import PoliticaPrivacidad from './pages/PoliticaPrivacidad/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies/PoliticaCookies';
import DPO from './pages/DPO/DPO';
import AvisoLegal from './pages/AvisoLegal/AvisoLegal';
// ...

// Login (page start)
import Login from './components/Login/Login';
// ...

// Services
import UserState from './context/UserState';
// ...

function App() {

  const [ token, setToken ] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (

    <UserState>

      <div>   

        <BrowserRouter>
          <Header/>
            <Routes>
              <Route element={<MainPage/>} path='/'/>
              <Route element={<QuienesSomos/>} path="/quienes-somos" />
              <Route element={<PoliticaPrivacidad/>} path="/politica-privacidad" />
              <Route element={<PoliticaCookies/>} path="/politica-cookies" />
              <Route element={<DPO/>} path="/dpo" />
              <Route element={<AvisoLegal/>} path="/aviso-legal" />
              <Route element={<Contacto/>} path="/contacto" />
            </Routes>
            <Footer/>
        </BrowserRouter>

        </div>

    </UserState>
  );
}

export default App;
