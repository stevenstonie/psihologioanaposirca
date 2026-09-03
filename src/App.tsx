import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import AboutMePage from './pages/about_me_page'
import ServicesPage from './pages/services_page'
import ArticlesPage from './pages/articles_page'
import BookingPage from './pages/booking_page'
import FAQPage from './pages/faq_page'
import ContactPage from './pages/contact_page'
import HomePage from './pages/home_page/home_page'
import NotFoundPage from './pages/not_found_page/not_found_page'
import { ScrollToTop } from './utils/scroll_to_top'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/despre-mine" element={<AboutMePage />} />
          <Route path="/servicii" element={<ServicesPage />} />
          <Route path="/articole" element={<ArticlesPage />} />
          <Route path="/programare" element={<BookingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <></>
    </>
  )
}

export default App
