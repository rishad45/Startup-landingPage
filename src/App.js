import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
