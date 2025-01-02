import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages/home";
import AboutMe from "./pages/aboutMe";
import TemplateHeader from "./components/header";


function Router() {
  return (
    <BrowserRouter>
      <TemplateHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<h2>Pagina nao encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
