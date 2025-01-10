import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider.tsx"
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import { CountryDetails } from './components/CountryDetails';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter basename="/country-explorer">
        <Routes>
          <Route index element={<App />} />
          <Route path="country/:name" element={<CountryDetails/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
