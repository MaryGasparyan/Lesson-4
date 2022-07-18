import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/pages/Layout/Layout";
import Home from "./Components/pages/Home/Home";
import Blogs from "./Components/pages/Blogs/Blogs";
import Contact from "./Components/pages/Contact/Contact";
import NoPage from "./Components/pages/NoPage/NoPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
