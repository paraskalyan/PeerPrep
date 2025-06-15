import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/profile' element={<Layout><UserProfile /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
