import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider.tsx"
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <Provider>
      <BrowserRouter basename="/country-explorer">
        <Routes>
          <Route index element={<App />} />
          <Route path="" />
        </Routes>
      </BrowserRouter>
    </Provider>
    </Provider>
  </StrictMode>,
)
