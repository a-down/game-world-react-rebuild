import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, Homepage, SearchPage } from './pages'
import { Header } from './components/HeaderComponents'
import { Theme, ThemePanel } from '@radix-ui/themes';
import starsBackground from './assets/stars-background.jpg'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Theme>
          <div style={{
            backgroundImage: `url(${starsBackground})`, 
            backgroundRepeat: 'repeat', 
            }}>
            <Header/>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </div>
          {/* <ThemePanel/> */}
        </Theme>
      </BrowserRouter>
    </>
  )
}


