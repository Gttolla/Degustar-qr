import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import QRCode from "react-qr-code";
import Aos from 'aos';

import MobileScren from "./components/mobile-screen";
import Main from "./pages/main/main";
import Events from "./pages/events/events";
import Clients from "./pages/clients/clients";
import Test from "./pages/test/test";

import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init();
  },[])

  const content =
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/eventos" element={<Events />} />
      <Route path="/test" element={<Test />} />
    </Routes>

  return (
    <div>
      <div id="app-container">
        <MobileScren content={content}/>
        
        <div id="qr-text">
          <h1 className="mb-10 text-center">Acesse nosso cartão <br /> pelo celular</h1>
          <QRCode value="https://degustarbuffet-socialmedias.netlify.app" className=" mx-auto border-primary"/>
        </div>
      </div>
    </div>
  );
}

export default App;
