import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Event from "./pages/Event";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import NotFound from "./pages/404";
import Library from "./pages/Library";
import Contact from "./pages/Contact";  
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/library" element={<Library />} />
      <Route path="/event" element={<Event />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tao-tai-khoan" element={<CreateAccount />} />
      <Route path="/quen-mat-khau" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
