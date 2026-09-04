import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import AboutMePage from './pages/about_me_page/about_me_page'
import ServicesPage from './pages/my_services_page/my_services_page'
import ArticlesPage from './pages/articles_page/articles_page'
import BookingPage from './pages/booking_page/booking_page'
import FAQPage from './pages/faq_page/faq_page'
import ContactPage from './pages/contact_page/contact_page'
import HomePage from './pages/home_page/home_page'
import NotFoundPage from './pages/not_found_page/not_found_page'
import { ScrollToTop } from './utils/scroll_to_top'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ROUTES } from './utils/navigation'
import ArticleDetails from './pages/article_details/article_details'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />

          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={ROUTES.ABOUT_ME} element={<AboutMePage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
            <Route path={ROUTES.BOOKING} element={<BookingPage />} />
            <Route path={ROUTES.FAQ} element={<FAQPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={`${ROUTES.ARTICLE}/:id`} element={<ArticleDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <></>
    </>
  )
}

export default App
