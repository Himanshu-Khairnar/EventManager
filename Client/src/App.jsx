import React from 'react'
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Register from "./Pages/Register.jsx"
import Login from "./Pages/Login.jsx"
import CreateEvent from "./Pages/CreateEvent.jsx"
import GetEvents from "./Pages/GetEvents.jsx"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id/createEvent" element={<CreateEvent />} />
          <Route path="/getEvent" element={<GetEvents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
