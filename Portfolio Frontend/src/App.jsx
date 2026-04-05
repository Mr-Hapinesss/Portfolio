import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import ContactMe from "./Contact me/ContactMe"
import Home from "./Homepage/Home"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
  )
}

export default App