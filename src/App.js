import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import Home from "./component/Home";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Happy from "./component/Happy";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Happy" element={<Happy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
