import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'
import Home from '../../pages/Home'

export const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes></BrowserRouter>
 
  )
}
