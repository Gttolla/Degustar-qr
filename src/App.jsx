import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main";
import Events from "./pages/events/events";
import Clients from "./pages/clients/clients";
import Test from "./pages/test/test";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
