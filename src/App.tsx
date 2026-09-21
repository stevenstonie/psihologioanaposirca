import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import { ROUTES } from './utils/navigation'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import AntiSuicideBanner from './components/anti_suicide_banner/anti_suicide_banner';
import { lazy, useEffect } from 'react';
import { Suspended } from './utils/page_loading/Suspended'

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

const HomePage = lazy(() => import('./pages/home_page/home_page'));
const AboutMePage = lazy(() => import('./pages/about_me_page/about_me_page'));
const ServicesPage = lazy(() => import('./pages/my_services_page/my_services_page'));
const ArticlesPage = lazy(() => import('./pages/articles_page/articles_page'));
const AppointmentPage = lazy(() => import('./pages/make_an_appointment_page/make_an_appointment_page'));
const FAQPage = lazy(() => import('./pages/faq_page/faq_page'));
const ContactPage = lazy(() => import('./pages/contact_page/contact_page'));
const ArticleDetailsPage = lazy(() => import('./pages/article_details_page/article_details_page'));
const PoliciesPage = lazy(() => import('./pages/policies_page/policies_page'));
const NotFoundPage = lazy(() => import('./pages/not_found_page/not_found_page'));

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
            <Route path="/" element={
              <Suspended key="home"><HomePage /></Suspended>
            } />
            <Route path={ROUTES.ABOUT_ME} element={<Suspended key="about"><AboutMePage /></Suspended>} />
            <Route path={ROUTES.SERVICES} element={<Suspended key="services"><ServicesPage /></Suspended>} />
            <Route path={ROUTES.ARTICLES} element={<Suspended key="articles"><ArticlesPage /></Suspended>} />
            <Route path={ROUTES.APPOINTMENT} element={<Suspended key="appointment"><AppointmentPage /></Suspended>} />
            <Route path={ROUTES.FAQ} element={<Suspended key="faq"><FAQPage /></Suspended>} />
            <Route path={ROUTES.CONTACT} element={<Suspended key="contact"><ContactPage /></Suspended>} />
            <Route path={`${ROUTES.ARTICLE}/:id`} element={<Suspended key="article_details"><ArticleDetailsPage /></Suspended>} />
            <Route path={ROUTES.POLICIES} element={<Suspended key="policies"><PoliciesPage /></Suspended>} />
            <Route path="*" element={<Suspended key="not_found"><NotFoundPage /></Suspended>} />
          </Routes>

        </BrowserRouter>
      </PersistQueryClientProvider>
      <></>
    </>
  )
}

export default App


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}