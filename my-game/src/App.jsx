import { Routes, Route, Link } from "react-router-dom";
import Home from "./main/home/home";
import "./App.css";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
