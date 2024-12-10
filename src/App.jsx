import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalCss } from "./styles";
import Footer from "./components/Footer";
import ListagemHome from "./container/ListagemHome";
import ListagemPerfil from "./container/ListagemPerfil";


function App() {

  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<ListagemHome />} />
        <Route path="/perfil" element={<ListagemPerfil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
