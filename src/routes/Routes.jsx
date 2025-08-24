import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chapter from "../components/Chapters";
import ChaptersPage from '../pages/ChaptersPage';
import FAQS from '../pages/FAQ';
// import About from "../pages/FAQS";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<ChaptersPage />} />
       <Route path="/chapter/:chapterId" element={<Chapter />} />
      <Route path="/FAQS" element={<FAQS />} />
    </Routes>
  );
};

export default AppRoutes;
