import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage/MainPage"


function App() {


  return (
  <BrowserRouter>
<Routes>
  <Route path="" element={<MainPage/>}>
    <Route path="kyu8" />
    <Route path="kyu7" />
    <Route path="kyu6" />
    <Route path="kyu5" />
    <Route path="kyu4" />
    <Route path="kyu3" />
    <Route path="kyu2" />
    <Route path="kyu1" />
    <Route path="kyu0" />


  </Route>
</Routes>
  </BrowserRouter>
  )
}

export default App
