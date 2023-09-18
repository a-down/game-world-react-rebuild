import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, Homepage, SearchPage } from './pages'
import { Header } from './components'
import { Theme, ThemePanel } from '@radix-ui/themes';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Theme>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          {/* <ThemePanel/> */}
        </Theme>
      </BrowserRouter>
    </>
  )
}


