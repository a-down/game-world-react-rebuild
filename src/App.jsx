import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesPage, Homepage, SearchPage } from './pages'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


