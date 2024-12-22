import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Review from "./pages/Review";
import Primary from "./pages/Primary";
import Secondary from "./pages/Secondary";
import High from "./pages/High";
import Library from "./pages/Library";
import Contact from "./pages/Contact";  
import CreateAccount from "./pages/CreateAccount";
import Video from "./pages/Video";
import Exercise from "./pages/Exercise";
import Information from "./pages/Information";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/review" element={<Review />} />
      <Route path="/library" element={<Library />} />
      <Route path="/primary" element={<Primary />} />
      <Route path="/secondary" element={<Secondary />} />
      <Route path="/high" element={<High />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tao-tai-khoan" element={<CreateAccount />} />
      <Route path="/information" element={<Information />} />
      <Route path="/video/:gradeName/:bookName/:lessonName/:itemName" element={<Video />} />
      <Route path="/exercise/:gradeName/:bookName/:lessonName/:itemName" element={<Exercise />} />
    </Routes>
  );
}

export default App;
