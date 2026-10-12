import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantDashboard from "./pages/restaurant/RestaurantDashboard";
import CreateDonation from "./pages/restaurant/CreateDonation";
import NGODashboard from "./pages/ngo/NGODashboard";
import AvailableFood from "./pages/ngo/AvailableFood";
import MyRequests from "./pages/ngo/MyRequests";
import DonateSurplus from "./pages/ngo/DonateSurplus";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AvailablePickups from "./pages/volunteer/AvailablePickups";
import MyPickups from "./pages/volunteer/MyPickups";
import History from "./pages/volunteer/History";
import VolunteerMap from "./pages/volunteer/VolunteerMap";
import MyImpact from "./pages/volunteer/MyImpact";

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

        <Route
          path="/ngo/available-food"
          element={<AvailableFood />}
        />

        <Route
          path="/ngo/requests"
          element={<MyRequests />}
        />

        <Route
          path="/ngo/donate-food"
          element={<DonateSurplus />}
        />

        <Route
          path="/dashboard/volunteer"
          element={<VolunteerDashboard />}
        />

        <Route
          path="/volunteer/pickups"
          element={<AvailablePickups />}
        />

        <Route
          path="/volunteer/my-pickups"
          element={<MyPickups />}
        />

        <Route
          path="/volunteer/history"
          element={<History />}
        />

        <Route
          path="/map"
          element={<VolunteerMap />}
        />

        <Route
    path="/impact"
    element={<MyImpact />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;