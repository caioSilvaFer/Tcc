import { Home } from "./components/Home";
import { useState } from 'react'
import { GlobalStyles } from "./components/GlobalStyles/styles";
import { Form } from "./components/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [reservas, setReservas] = useState([])
  function addReserva(newValue) {
    setReservas(reservas => [...reservas, newValue])
  }
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" index element={<Home reservas={reservas} />} />
        <Route path="/Form" element={<Form addReserva={addReserva} />} />
      </Routes>
    </Router>
  );

}

export default App;
