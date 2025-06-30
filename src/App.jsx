import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App