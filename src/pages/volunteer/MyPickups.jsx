import DashboardLayout from "../../layouts/DashboardLayout";
import "./MyPickups.css";

function MyPickups() {
    return (
        <DashboardLayout
            title="My Pickups"
            subtitle="Track your accepted pickups and deliveries"
            role="Volunteer"
        >

            <div className="my-pickups-header">
                <div>
                    <h1>My Pickups 🚴</h1>
                    <p>
                        Manage your active pickups and track delivery progress.
                    </p>
                </div>
            </div>


            <div className="pickup-status-summary">

                <div className="status-summary-card">
                    <span>📦</span>
                    <div>
                        <strong>1</strong>
                        <p>Active Pickup</p>
                    </div>
                </div>

                <div className="status-summary-card">
                    <span>🚴</span>
                    <div>
                        <strong>1</strong>
                        <p>In Transit</p>
                    </div>
                </div>

                <div className="status-summary-card">
                    <span>✅</span>
                    <div>
                        <strong>12</strong>
                        <p>Completed</p>
                    </div>
                </div>

                <div className="status-summary-card">
                    <span>🍱</span>
                    <div>
                        <strong>320</strong>
                        <p>Meals Delivered</p>
                    </div>
                </div>

            </div>


            <div className="active-pickup-card">

                <div className="active-pickup-header">

                    <div>
                        <span className="active-badge">
                            ACTIVE PICKUP
                        </span>

                        <h2>Vegetable Rice</h2>

                        <p>
                            Pickup ID: FB-2026-00124
                        </p>
                    </div>

                    <div className="priority-badge">
                        High Priority
                    </div>

                </div>


                <div className="pickup-route-section">

                    <div className="pickup-location-box">

                        <div className="location-icon">
                            🏪
                        </div>

                        <div>
                            <small>Pickup From</small>

                            <strong>
                                Green Leaf Restaurant
                            </strong>

                            <p>
                                Gomti Nagar, Lucknow
                            </p>
                        </div>

                    </div>


                    <div className="route-arrow">
                        →
                    </div>


                    <div className="pickup-location-box">

                        <div className="location-icon">
                            🏢
                        </div>

                        <div>
                            <small>Deliver To</small>

                            <strong>
                                Hope Foundation NGO
                            </strong>

                            <p>
                                Aliganj, Lucknow
                            </p>
                        </div>

                    </div>

                </div>


                <div className="pickup-information">

                    <div>
                        <span>Food Quantity</span>
                        <strong>30 Meals</strong>
                    </div>

                    <div>
                        <span>Pickup Distance</span>
                        <strong>2.5 km</strong>
                    </div>

                    <div>
                        <span>Delivery Distance</span>
                        <strong>3.8 km</strong>
                    </div>

                    <div>
                        <span>Expires In</span>
                        <strong>2 Hours</strong>
                    </div>

                </div>


                <div className="delivery-progress">

                    <div className="progress-title">
                        <h3>Delivery Progress</h3>

                        <span>
                            Pickup Assigned
                        </span>
                    </div>


                    <div className="progress-track">

                        <div className="progress-step completed">
                            <div className="progress-dot">
                                ✓
                            </div>

                            <span>Assigned</span>
                        </div>


                        <div className="progress-line active"></div>


                        <div className="progress-step current">
                            <div className="progress-dot">
                                2
                            </div>

                            <span>Pickup</span>
                        </div>


                        <div className="progress-line"></div>


                        <div className="progress-step">
                            <div className="progress-dot">
                                3
                            </div>

                            <span>In Transit</span>
                        </div>


                        <div className="progress-line"></div>


                        <div className="progress-step">
                            <div className="progress-dot">
                                4
                            </div>

                            <span>Delivered</span>
                        </div>

                    </div>

                </div>


                <div className="pickup-actions">

                    <button className="map-btn">
                        📍 View Route
                    </button>

                    <button className="pickup-action-btn">
                        Confirm Pickup →
                    </button>

                </div>

            </div>


            <div className="pickup-instruction-card">

                <div className="instruction-icon">
                    🔐
                </div>

                <div>
                    <h2>Pickup Verification</h2>

                    <p>
                        When you reach the restaurant, the donor will provide
                        a pickup OTP. Enter the OTP to confirm that you have
                        collected the food.
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default MyPickups;