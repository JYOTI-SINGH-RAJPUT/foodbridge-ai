import DashboardLayout from "../../layouts/DashboardLayout";
import "./RestaurantDashboard.css";
import { Link } from "react-router-dom";

function RestaurantDashboard() {
    return (
        <DashboardLayout>

            {/* Welcome Section */}
            <div className="restaurant-welcome">
                <div>
                    <h1>Welcome back, Restaurant!</h1>
                    <p>
                        Manage your surplus food and help reduce food waste.
                    </p>
                </div>

                <Link
                    to="/dashboard/restaurant/create-donation"
                    className="create-donation-btn"
                >
                    + Create Donation
                </Link>
            </div>


            {/* Stats */}
            <div className="restaurant-stats">

                <div className="stat-card">
                    <div className="stat-icon">🍱</div>
                    <div>
                        <h3>12</h3>
                        <p>Total Donations</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📦</div>
                    <div>
                        <h3>4</h3>
                        <p>Available Donations</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div>
                        <h3>8</h3>
                        <p>Completed</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">❤️</div>
                    <div>
                        <h3>326</h3>
                        <p>People Served</p>
                    </div>
                </div>

            </div>


            {/* Main Grid */}
            <div className="restaurant-grid">

                {/* Recent Donations */}
                <div className="dashboard-section">

                    <div className="section-header">
                        <h2>Recent Donations</h2>
                        <a href="/donations">View All</a>
                    </div>

                    <div className="donation-item">
                        <div>
                            <strong>Fresh Biryani</strong>
                            <span>50 meals • 2 hours ago</span>
                        </div>

                        <span className="status available">
                            Available
                        </span>
                    </div>

                    <div className="donation-item">
                        <div>
                            <strong>Vegetable Rice</strong>
                            <span>30 meals • Yesterday</span>
                        </div>

                        <span className="status completed">
                            Completed
                        </span>
                    </div>

                    <div className="donation-item">
                        <div>
                            <strong>Chapati & Sabzi</strong>
                            <span>40 meals • 2 days ago</span>
                        </div>

                        <span className="status completed">
                            Completed
                        </span>
                    </div>

                </div>


                {/* AI Priority */}
                <div className="dashboard-section ai-section">

                    <div className="section-header">
                        <h2>AI Priority</h2>
                        <span className="ai-badge">AI</span>
                    </div>

                    <div className="priority-box">

                        <div className="priority-top">
                            <strong>Fresh Biryani</strong>
                            <span>92/100</span>
                        </div>

                        <div className="priority-bar">
                            <div className="priority-fill"></div>
                        </div>

                        <p>
                            High priority because the food has a short
                            remaining shelf life and nearby NGO demand is high.
                        </p>

                        <button>
                            View Recommendation
                        </button>

                    </div>

                </div>

            </div>


            {/* Quick Action */}
            <div className="quick-action">

                <div>
                    <h2>Have surplus food?</h2>
                    <p>
                        Create a donation and let FoodBridge AI find suitable NGOs.
                    </p>
                </div>

                <Link
                    to="/dashboard/restaurant/create-donation"
                    className="quick-donate-btn"
                >
                    Donate Food →
                </Link>

            </div>

        </DashboardLayout>
    );
}

export default RestaurantDashboard;