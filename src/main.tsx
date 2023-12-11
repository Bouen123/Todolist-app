import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold ">Sticky Wall</h1>
    <hr className="my-4"/>
    <App />
  </React.StrictMode>,
)
