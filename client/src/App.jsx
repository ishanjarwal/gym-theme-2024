import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import SideBar from './components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Standard from './layouts/Standard'
import SideBarContextProvider from './contexts/SidebarContext'

const App = () => {

  return (
    <SideBarContextProvider>
      <Routes>
        <Route path={'/'} element={<Standard />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </SideBarContextProvider>
  )
}

export default App
