import Header from "./components/Header";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import ContactNav from "./components/ContactNav";

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <ContactNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
