import DashboardLayout from "../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import "./NGODashboard.css";

function NGODashboard() {
  return (
    <DashboardLayout
      title="NGO Dashboard"
      subtitle="Manage food requests and help reduce food waste"
      role="NGO"
    >
      {/* Welcome Section */}
      <div className="ngo-welcome">
        <div>
          <h1>Welcome, NGO Team 👋</h1>
          <p>
            Find surplus food, request donations, and make a greater impact
            in your community.
          </p>
        </div>

        <Link to="/ngo/available-food" className="ngo-primary-btn">
          🍱 Find Available Food
        </Link>
      </div>

      {/* Statistics */}
      <div className="ngo-stats">

        <div className="ngo-stat-card">
          <div className="ngo-stat-icon">📦</div>
          <div>
            <h3>12</h3>
            <p>Food Received</p>
          </div>
        </div>

        <div className="ngo-stat-card">
          <div className="ngo-stat-icon">📋</div>
          <div>
            <h3>5</h3>
            <p>Active Requests</p>
          </div>
        </div>

        <div className="ngo-stat-card">
          <div className="ngo-stat-icon">🚴</div>
          <div>
            <h3>3</h3>
            <p>Pending Pickups</p>
          </div>
        </div>

        <div className="ngo-stat-card">
          <div className="ngo-stat-icon">❤️</div>
          <div>
            <h3>420</h3>
            <p>People Served</p>
          </div>
        </div>

      </div>

      {/* Main Dashboard Grid */}
      <div className="ngo-dashboard-grid">

        {/* Available Food */}
        <div className="ngo-section-card">
          <div className="section-header">
            <div>
              <h2>Available Food</h2>
              <p>Surplus food available near your location</p>
            </div>

            <Link to="/ngo/available-food">
              View All →
            </Link>
          </div>

          <div className="food-item">
            <div className="food-icon">🍚</div>

            <div className="food-info">
              <h3>Vegetable Rice</h3>
              <p>30 meals • 2.5 km away</p>
              <span className="urgent-tag">High Priority</span>
            </div>

            <button className="request-btn">
              Request
            </button>
          </div>

          <div className="food-item">
            <div className="food-icon">🍛</div>

            <div className="food-info">
              <h3>Paneer Curry</h3>
              <p>25 meals • 4.1 km away</p>
              <span className="normal-tag">Available</span>
            </div>

            <button className="request-btn">
              Request
            </button>
          </div>

          <div className="food-item">
            <div className="food-icon">🥘</div>

            <div className="food-info">
              <h3>Chapati & Sabzi</h3>
              <p>40 meals • 5.2 km away</p>
              <span className="normal-tag">Available</span>
            </div>

            <button className="request-btn">
              Request
            </button>
          </div>
        </div>

        {/* My Requests */}
        <div className="ngo-section-card">
          <div className="section-header">
            <div>
              <h2>My Requests</h2>
              <p>Recent food requests</p>
            </div>

            <Link to="/ngo/requests">
              View All →
            </Link>
          </div>

          <div className="request-item">
            <div>
              <h3>Fresh Biryani</h3>
              <p>50 meals</p>
            </div>

            <span className="status-pending">
              Pending
            </span>
          </div>

          <div className="request-item">
            <div>
              <h3>Vegetable Rice</h3>
              <p>30 meals</p>
            </div>

            <span className="status-approved">
              Approved
            </span>
          </div>

          <div className="request-item">
            <div>
              <h3>Chapati & Sabzi</h3>
              <p>40 meals</p>
            </div>

            <span className="status-delivered">
              Delivered
            </span>
          </div>
        </div>

      </div>

      {/* Donate Surplus Food */}
      <div className="ngo-donate-card">

        <div className="donate-content">
          <div className="donate-icon">🤝</div>

          <div>
            <h2>Have Surplus Food?</h2>

            <p>
              If your NGO has received more food than currently needed,
              you can donate the surplus to another NGO through FoodBridge AI.
            </p>
          </div>
        </div>

        <Link to="/ngo/donate-food" className="donate-btn">
          Donate Surplus Food →
        </Link>

      </div>

      {/* AI Recommendation */}
      <div className="ngo-ai-card">

        <div className="ai-icon">🤖</div>

        <div>
          <h2>AI Recommendation</h2>

          <p>
            Based on food urgency, quantity, distance and your NGO's
            current demand, Vegetable Rice from a nearby restaurant
            is recommended for your next request.
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default NGODashboard;