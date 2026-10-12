import DashboardLayout from "../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import "./MyRequests.css";

function MyRequests() {
    return (
        <DashboardLayout
            title="My Requests"
            subtitle="Track your food requests and their status"
            role="NGO"
        >

            {/* Header */}
            <div className="my-requests-header">

                <div>
                    <h1>My Food Requests 📋</h1>

                    <p>
                        Track all the food requests made by your NGO.
                    </p>
                </div>

                <Link
                    to="/ngo/available-food"
                    className="find-food-btn"
                >
                    🍱 Find More Food
                </Link>

            </div>


            {/* Summary Cards */}
            <div className="request-summary">

                <div className="request-summary-card">
                    <span>📋</span>
                    <div>
                        <h3>5</h3>
                        <p>Total Requests</p>
                    </div>
                </div>

                <div className="request-summary-card">
                    <span>⏳</span>
                    <div>
                        <h3>2</h3>
                        <p>Pending</p>
                    </div>
                </div>

                <div className="request-summary-card">
                    <span>✅</span>
                    <div>
                        <h3>2</h3>
                        <p>Approved</p>
                    </div>
                </div>

                <div className="request-summary-card">
                    <span>❤️</span>
                    <div>
                        <h3>1</h3>
                        <p>Delivered</p>
                    </div>
                </div>

            </div>


            {/* Requests */}
            <div className="requests-section">

                <div className="requests-section-header">
                    <div>
                        <h2>Recent Requests</h2>
                        <p>Your latest food requests</p>
                    </div>

                    <select>
                        <option>All Requests</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                        <option>Delivered</option>
                    </select>
                </div>


                {/* Request 1 */}
                <div className="request-row">

                    <div className="request-food-icon">
                        🍚
                    </div>

                    <div className="request-food-info">
                        <h3>Vegetable Rice</h3>

                        <p>
                            30 meals • Green Leaf Restaurant
                        </p>

                        <small>
                            Requested 20 minutes ago
                        </small>
                    </div>

                    <div className="request-quantity">
                        <span>Requested</span>
                        <strong>30 Meals</strong>
                    </div>

                    <span className="request-status pending">
                        Pending
                    </span>

                </div>


                {/* Request 2 */}
                <div className="request-row">

                    <div className="request-food-icon">
                        🍛
                    </div>

                    <div className="request-food-info">
                        <h3>Paneer Curry</h3>

                        <p>
                            20 meals • Spice Garden
                        </p>

                        <small>
                            Requested yesterday
                        </small>
                    </div>

                    <div className="request-quantity">
                        <span>Requested</span>
                        <strong>20 Meals</strong>
                    </div>

                    <span className="request-status approved">
                        Approved
                    </span>

                </div>


                {/* Request 3 */}
                <div className="request-row">

                    <div className="request-food-icon">
                        🫓
                    </div>

                    <div className="request-food-info">
                        <h3>Chapati & Sabzi</h3>

                        <p>
                            40 meals • Royal Kitchen
                        </p>

                        <small>
                            Requested 2 days ago
                        </small>
                    </div>

                    <div className="request-quantity">
                        <span>Requested</span>
                        <strong>40 Meals</strong>
                    </div>

                    <span className="request-status delivered">
                        Delivered
                    </span>

                </div>


                {/* Request 4 */}
                <div className="request-row">

                    <div className="request-food-icon">
                        🥗
                    </div>

                    <div className="request-food-info">
                        <h3>Mixed Vegetable Meal</h3>

                        <p>
                            25 meals • Fresh Bites
                        </p>

                        <small>
                            Requested 3 days ago
                        </small>
                    </div>

                    <div className="request-quantity">
                        <span>Requested</span>
                        <strong>25 Meals</strong>
                    </div>

                    <span className="request-status rejected">
                        Rejected
                    </span>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default MyRequests;