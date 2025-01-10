import './App.css'
import Layout from './components/Layout'
import { getCountry } from './services/api/api'

function App() {
  getCountry();
  return (
    <>
      <Layout />
    </>
  )
}

export default App
