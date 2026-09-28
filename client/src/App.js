import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { paths } from "./paths";

//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.main} element={<MainPage />} />
        <Route path={paths.about} element={<AboutPage />} />
        <Route path={paths.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
