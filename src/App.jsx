import "./Login.css";
import { Routes, Route, Link } from "react-router-dom";
import { LonInForm } from "./LonInForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LonInForm />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </>
  );
}



export default App;
