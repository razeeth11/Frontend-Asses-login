import "./Login.css";
import "./Main.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LonInForm } from "./LonInForm";
import { MainDiv } from "./MainDiv";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LonInForm />} />
        <Route
          path="/data-table"
          element={
            <ProtectedRoute>
              <MainDiv />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token === "athreyan@gmail.com" ? (
    <div>{children}</div>
  ) : (
    <Navigate replace to="/" />
  );
}

export default App;
