import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //componenete por defecto pero no se usa
import Principal from './Principal.jsx' //es el componente mio
import { BrowserRouter } from 'react-router-dom' //importar para rutas

createRoot(document.getElementById('root')).render(
  //si manejo rutas ya no manejo el <StrictMode> sino que
  // debo usar el <BrowserRouter>
  //<StrictMode>
  //  <Principal></Principal>
  //</StrictMode>,

  <BrowserRouter>
    <Principal></Principal>
  </BrowserRouter>,
)
