import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Saunas from './pages/Saunas'
import Sauna from './pages/Sauna'
import AuthRequired from './components/AuthRequired'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import HostSaunas from './pages/host/HostSaunas'
import Reviews from './pages/host/Reviews'
import HostSaunaDetail from './pages/host/HostSaunaDetail'
import HostSaunaInfo from './pages/host/HostSaunaInfo'
import HostSaunaPricing from './pages/host/HostSaunaPricing'
import HostSaunaPhotos from './pages/host/HostSaunaPhotos'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='saunas' element={<Saunas />} />
          <Route path='saunas/:id' element={<Sauna />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="saunas" element={<HostSaunas />} />
              <Route path="reviews" element={<Reviews />} />

              <Route path='saunas/:id' element={<HostSaunaDetail />}>
                <Route index element={<HostSaunaInfo />} />
                <Route path='pricing' element={<HostSaunaPricing />} />
                <Route path='photos' element={<HostSaunaPhotos />} />
              </Route>
              
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
