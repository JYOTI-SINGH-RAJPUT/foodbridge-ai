import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantDashboard from "./pages/restaurant/RestaurantDashboard";
import CreateDonation from "./pages/restaurant/CreateDonation";
import NGODashboard from "./pages/ngo/NGODashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/roles" element={<RoleSelection />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard/restaurant"
          element={<RestaurantDashboard />}
        />

        <Route
          path="/dashboard/restaurant/create-donation"
          element={<CreateDonation />}
        />

        <Route
  path="/dashboard/ngo"
  element={<NGODashboard />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;