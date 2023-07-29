import { Route, Routes } from "react-router-dom";

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
    <MobileScren content={content}/>
  );
}

export default App;
