import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
