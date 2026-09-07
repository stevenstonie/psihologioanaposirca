import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import AboutMePage from './pages/about_me_page/about_me_page'
import ServicesPage from './pages/my_services_page/my_services_page'
import ArticlesPage from './pages/articles_page/articles_page'
import BookingPage from './pages/make_an_appointment_page/make_an_appointment_page'
import FAQPage from './pages/faq_page/faq_page'
import ContactPage from './pages/contact_page/contact_page'
import HomePage from './pages/home_page/home_page'
import NotFoundPage from './pages/not_found_page/not_found_page'
import { ScrollToTop } from './utils/scroll_to_top'
import { ROUTES } from './utils/navigation'
import ArticleDetailsPage from './pages/article_details_page/article_details_page'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import AntiSuicideBanner from './components/anti_suicide_banner/anti_suicide_banner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 24 * 60 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const localStoragePersister = createAsyncStoragePersister({
  storage: window.localStorage,
});

function App() {

  return (
    <>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <BrowserRouter>
          <ScrollToTop />
          
          <AntiSuicideBanner />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={ROUTES.ABOUT_ME} element={<AboutMePage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
            <Route path={ROUTES.BOOKING} element={<BookingPage />} />
            <Route path={ROUTES.FAQ} element={<FAQPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={`${ROUTES.ARTICLE}/:id`} element={<ArticleDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </PersistQueryClientProvider>
      <></>
    </>
  )
}

export default App
