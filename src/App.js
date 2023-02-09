import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/admin" element={<div></div>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
