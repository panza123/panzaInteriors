import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import About from "./pages/About";
import Design from "./pages/Design";
import Process from "./pages/Process";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='design' element={<Design />} />
          <Route path='process' element={<Process />} />
          <Route path='project' element={<Project />} />
          <Route path='contact' element={<Contact />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
