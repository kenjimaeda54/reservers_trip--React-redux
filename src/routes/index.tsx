import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Reserves from '../pages/reserves'

export function AppRoutes () {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/reservas" element={<Reserves />} />
  </Routes>
  )
}
