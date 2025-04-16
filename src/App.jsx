import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePublicProfilePage from "./pages/profile/CreatePublicProfilePage";
import PublicProfile from "./pages/profile/PublicProfile";
import CreateBusinessProfilePage from "./pages/profile/CreateBusinessProfilePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CreatePublicProfilePage />} />
          <Route path="/public_profile" element={<PublicProfile />} />
          <Route
            path="/business_profile"
            element={<CreateBusinessProfilePage />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
