import React from 'react'
import { useNavigate } from 'react-router-dom'
function BackToMenu() {
  const navigate = useNavigate()

  const handleBackToMenu = () => {
    navigate('/')
  }

  return (
    <button
      onClick={handleBackToMenu}
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
    >
      Volver al Menú Principal
    </button>
  )
}

export default BackToMenu
