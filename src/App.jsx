import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main";
import Test from "./pages/test/test";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
