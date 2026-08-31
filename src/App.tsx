import { BrowserRouter, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/navbar'
import IntroSection from './sections/intro'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

        </Routes>
      </BrowserRouter>
      <div style={{ height: '200svh' }}></div>

      <IntroSection></IntroSection>
    </>
  )
}

export default App
