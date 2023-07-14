import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage/MainPage"


function App() {


  return (
  <BrowserRouter>
<Routes>
  <Route path="" element={<MainPage/>}>
  </Route>
</Routes>
  </BrowserRouter>
  )
}

export default App
