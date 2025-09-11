import { useState } from 'react'
import AppRouter from './routes/AppRouter'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
