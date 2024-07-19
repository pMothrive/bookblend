import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route exact path="/" element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
