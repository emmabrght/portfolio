import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Homepage from "./Components/Pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
