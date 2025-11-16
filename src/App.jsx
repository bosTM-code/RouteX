import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About_Us";

import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/service" element={<Service />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
