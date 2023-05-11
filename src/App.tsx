import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RootLayout from './pages/RootLayout'

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
