import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import AboutPage from "./pages/AboutPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampsites } from "./features/campsites/CampsitesSlice";
import { fetchPartners } from "./features/partners/PartnersSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchComments } from "./features/comments/CommentsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/directory' element={<CampsitesDirectoryPage />} />
        <Route path='/directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
