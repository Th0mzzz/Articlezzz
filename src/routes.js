import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages/home";
import AboutMe from "./pages/aboutMe";
import TemplateHeader from "./components/header";
import TemplatePage from "components/TemplatePage";
import TemplateFooter from "components/Footer";
import Post from "components/Post";
import ErrorPage from "components/Error";
import ScrollToTop from "components/ScrollToTop";




function Router() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TemplateHeader />
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route index element={<Index />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>
        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<ErrorPage type="404" />} />
      </Routes>
      <TemplateFooter />
    </BrowserRouter>
  )
}

export default Router;
