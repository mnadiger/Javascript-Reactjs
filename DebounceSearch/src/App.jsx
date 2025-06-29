import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
    <h1>Debounce Example</h1>
    <input type="text" placeholder="Search..." />
    <button>Search</button>
    <p>Search term: {searchTerm}</p>
    </>
  )
}

export default App
