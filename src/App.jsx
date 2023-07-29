import { Route, Routes } from "react-router-dom";
import QRCode from "react-qr-code";

import MobileScren from "./components/mobile-screen";
import Main from "./pages/main/main";
import Events from "./pages/events/events";
import Clients from "./pages/clients/clients";
import Test from "./pages/test/test";

function App() {
  const content =
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/eventos" element={<Events />} />
      <Route path="/test" element={<Test />} />
    </Routes>

  return (
    <div id="app-container">
      <MobileScren content={content}/>

    <div id="qr-text">
      <h1 className="mb-4">Acesse nosso cartão pelo celular</h1>
      <QRCode value="https://degustarbuffet-socialmedias.netlify.app" className=" mx-auto border-primary"/>
      </div>
    </div>
  );
}

export default App;
