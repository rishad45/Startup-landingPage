import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/Landingpage";
import AdminPage from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
