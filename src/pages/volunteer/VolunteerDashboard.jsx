import DashboardLayout from "../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import "./VolunteerDashboard.css";

function VolunteerDashboard() {
    return (
        <DashboardLayout
            title="Volunteer Dashboard"
            subtitle="Help collect and deliver surplus food"
            role="Volunteer"
        >

            {/* =========================
                Welcome Section
            ========================= */}

            <div className="volunteer-welcome">

                <div>
                    <h1>Welcome, Volunteer 👋</h1>

                    <p>
                        Help connect surplus food with NGOs by
                        collecting and delivering donations safely.
                    </p>
                </div>

                <Link
                    to="/volunteer/pickups"
                    className="volunteer-primary-btn"
                >
                    🚴 Find Pickup
                </Link>

            </div>


            {/* =========================
                Statistics
            ========================= */}

            <div className="volunteer-stats">

                <div className="volunteer-stat-card">
                    <div className="volunteer-stat-icon">
                        📦
                    </div>

                    <div>
                        <h3>8</h3>
                        <p>Available Pickups</p>
                    </div>
                </div>


                <div className="volunteer-stat-card">
                    <div className="volunteer-stat-icon">
                        🚴
                    </div>

                    <div>
                        <h3>1</h3>
                        <p>Active Pickup</p>
                    </div>
                </div>


                <div className="volunteer-stat-card">
                    <div className="volunteer-stat-icon">
                        ✅
                    </div>

                    <div>
                        <h3>24</h3>
                        <p>Completed Deliveries</p>
                    </div>
                </div>


                <div className="volunteer-stat-card">
                    <div className="volunteer-stat-icon">
                        ❤️
                    </div>

                    <div>
                        <h3>420</h3>
                        <p>Meals Delivered</p>
                    </div>
                </div>

            </div>


            {/* =========================
                Main Dashboard Grid
            ========================= */}

            <div className="volunteer-dashboard-grid">


                {/* Available Pickups */}

                <div className="volunteer-section-card">

                    <div className="volunteer-section-header">

                        <div>
                            <h2>Available Pickups</h2>

                            <p>
                                Food donations waiting for volunteers
                            </p>
                        </div>

                        <Link to="/volunteer/pickups">
                            View All →
                        </Link>

                    </div>


                    {/* Pickup 1 */}

                    <div className="pickup-item">

                        <div className="pickup-food-icon">
                            🍚
                        </div>

                        <div className="pickup-info">

                            <h3>Vegetable Rice</h3>

                            <p>
                                Green Leaf Restaurant → Hope Foundation
                            </p>

                            <div className="pickup-meta">
                                <span>📦 30 Meals</span>
                                <span>📍 2.5 km</span>
                                <span>⏱ 2 hours</span>
                            </div>

                        </div>

                        <button className="accept-pickup-btn">
                            Accept
                        </button>

                    </div>


                    {/* Pickup 2 */}

                    <div className="pickup-item">

                        <div className="pickup-food-icon">
                            🍛
                        </div>

                        <div className="pickup-info">

                            <h3>Paneer Curry</h3>

                            <p>
                                Spice Garden → Helping Hands NGO
                            </p>

                            <div className="pickup-meta">
                                <span>📦 25 Meals</span>
                                <span>📍 4.1 km</span>
                                <span>⏱ 5 hours</span>
                            </div>

                        </div>

                        <button className="accept-pickup-btn">
                            Accept
                        </button>

                    </div>


                    {/* Pickup 3 */}

                    <div className="pickup-item">

                        <div className="pickup-food-icon">
                            🫓
                        </div>

                        <div className="pickup-info">

                            <h3>Chapati & Sabzi</h3>

                            <p>
                                Royal Kitchen → Food For All
                            </p>

                            <div className="pickup-meta">
                                <span>📦 40 Meals</span>
                                <span>📍 5.2 km</span>
                                <span>⏱ 7 hours</span>
                            </div>

                        </div>

                        <button className="accept-pickup-btn">
                            Accept
                        </button>

                    </div>

                </div>


                {/* Active Pickup */}

                <div className="volunteer-section-card">

                    <div className="volunteer-section-header">

                        <div>
                            <h2>My Active Pickup</h2>

                            <p>
                                Your currently assigned delivery
                            </p>
                        </div>

                    </div>


                    <div className="active-pickup-card">

                        <div className="active-pickup-icon">
                            🍚
                        </div>

                        <div className="active-pickup-info">

                            <h3>Vegetable Rice</h3>

                            <p>
                                Green Leaf Restaurant
                            </p>

                            <div className="route-info">
                                <span>📍 Pickup</span>
                                <strong>Green Leaf Restaurant</strong>
                            </div>

                            <div className="route-line">
                                ↓
                            </div>

                            <div className="route-info">
                                <span>📍 Deliver</span>
                                <strong>Hope Foundation</strong>
                            </div>

                        </div>

                        <span className="pickup-status">
                            In Progress
                        </span>

                    </div>


                    <Link
                        to="/volunteer/my-pickups"
                        className="track-pickup-btn"
                    >
                        Track Pickup →
                    </Link>

                </div>

            </div>


            {/* =========================
                AI Route Recommendation
            ========================= */}

            <div className="volunteer-ai-card">

                <div className="volunteer-ai-icon">
                    🤖
                </div>

                <div className="volunteer-ai-content">

                    <h2>AI Route Recommendation</h2>

                    <p>
                        Based on pickup urgency, distance and delivery
                        location, FoodBridge AI recommends accepting the
                        Vegetable Rice pickup first.
                    </p>

                </div>

                <div className="volunteer-ai-score">

                    <strong>92</strong>

                    <span>/100</span>

                    <small>Priority</small>

                </div>

            </div>


            {/* =========================
                Quick Actions
            ========================= */}

            <div className="volunteer-quick-section">

                <h2>Quick Actions</h2>

                <div className="volunteer-quick-actions">


                    <Link
                        to="/volunteer/pickups"
                        className="volunteer-quick-card"
                    >

                        <span>📦</span>

                        <div>
                            <h3>Available Pickups</h3>

                            <p>
                                Find food donations to deliver
                            </p>
                        </div>

                        <b>→</b>

                    </Link>


                    <Link
                        to="/volunteer/my-pickups"
                        className="volunteer-quick-card"
                    >

                        <span>🚴</span>

                        <div>
                            <h3>My Pickups</h3>

                            <p>
                                Track your active deliveries
                            </p>
                        </div>

                        <b>→</b>

                    </Link>


                    <Link
                        to="/volunteer/history"
                        className="volunteer-quick-card"
                    >

                        <span>📋</span>

                        <div>
                            <h3>Delivery History</h3>

                            <p>
                                View your completed deliveries
                            </p>
                        </div>

                        <b>→</b>

                    </Link>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default VolunteerDashboard;