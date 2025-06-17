import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import UserProfile from './pages/UserProfile'
import Chat from './pages/Chat'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Layout><Home /></Layout>
          </ProtectedRoute>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <Layout><UserProfile /></Layout>
          </ProtectedRoute>
        } />
        <Route path='/chat' element={<Layout><Chat /></Layout>} />
      </Routes>
    </>
  )
}

export default App
