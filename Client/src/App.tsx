import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
