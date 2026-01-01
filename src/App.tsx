import {Dashboard} from "./Pages/dashboard"
import { Signin } from "./Pages/signin"
import { Signup } from "./Pages/signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  </BrowserRouter>
}

export default App
