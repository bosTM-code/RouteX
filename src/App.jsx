import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter basename="/RouteX">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
