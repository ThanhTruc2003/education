import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/trang-chu" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
