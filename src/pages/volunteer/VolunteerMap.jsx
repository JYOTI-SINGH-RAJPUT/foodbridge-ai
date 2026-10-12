import DashboardLayout from "../../layouts/DashboardLayout";
import "./VolunteerMap.css";

function VolunteerMap() {
    return (
        <DashboardLayout
            title="Pickup & Delivery Map"
            subtitle="View your pickup and delivery route"
            role="Volunteer"
        >

            <div className="volunteer-map-header">

                <div>
                    <h1>Pickup & Delivery Map 📍</h1>

                    <p>
                        View the route from the food donor to the NGO.
                    </p>
                </div>

                <div className="map-status">
                    🟢 Active Pickup
                </div>

            </div>


            <div className="map-layout">


                <div className="map-container">

                    <div className="map-placeholder">

                        <div className="map-grid"></div>


                        <div className="map-road road-one"></div>
                        <div className="map-road road-two"></div>
                        <div className="map-road road-three"></div>


                        <div className="map-marker pickup-marker">
                            🏪
                        </div>

                        <div className="map-marker delivery-marker">
                            🏢
                        </div>


                        <div className="route-path">
                            <span className="route-point-one"></span>
                            <span className="route-point-two"></span>
                            <span className="route-point-three"></span>
                        </div>


                        <div className="map-label pickup-label">
                            <strong>Green Leaf Restaurant</strong>
                            <span>Pickup</span>
                        </div>


                        <div className="map-label delivery-label">
                            <strong>Hope Foundation NGO</strong>
                            <span>Delivery</span>
                        </div>


                        <div className="map-zoom-controls">

                            <button>+</button>
                            <button>−</button>

                        </div>


                        <div className="map-current-location">
                            📍
                        </div>

                    </div>

                </div>



                <div className="route-info-card">

                    <div className="route-info-header">

                        <div>
                            <span className="active-route-badge">
                                ACTIVE ROUTE
                            </span>

                            <h2>Vegetable Rice</h2>

                            <p>
                                Pickup ID: FB-2026-00124
                            </p>
                        </div>

                    </div>


                    <div className="route-location">

                        <div className="route-location-item">

                            <div className="route-location-icon">
                                🏪
                            </div>

                            <div>
                                <small>Pickup From</small>

                                <strong>
                                    Green Leaf Restaurant
                                </strong>

                                <span>
                                    Gomti Nagar, Lucknow
                                </span>
                            </div>

                        </div>


                        <div className="route-connector">
                            ↓
                        </div>


                        <div className="route-location-item">

                            <div className="route-location-icon">
                                🏢
                            </div>

                            <div>
                                <small>Deliver To</small>

                                <strong>
                                    Hope Foundation NGO
                                </strong>

                                <span>
                                    Aliganj, Lucknow
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="route-stats">

                        <div>
                            <span>Total Distance</span>
                            <strong>6.3 km</strong>
                        </div>

                        <div>
                            <span>Estimated Time</span>
                            <strong>24 min</strong>
                        </div>

                        <div>
                            <span>Food Quantity</span>
                            <strong>30 Meals</strong>
                        </div>

                    </div>


                    <div className="ai-route-recommendation">

                        <div className="ai-route-icon">
                            🤖
                        </div>

                        <div>
                            <h3>AI Route Recommendation</h3>

                            <p>
                                This route is recommended because the food
                                expires in approximately 2 hours.
                            </p>
                        </div>

                    </div>


                    <button className="start-navigation-btn">
                        🧭 Start Navigation
                    </button>

                </div>

            </div>


            <div className="map-legend">

                <div>
                    <span className="legend-marker pickup"></span>
                    Pickup Location
                </div>

                <div>
                    <span className="legend-marker delivery"></span>
                    Delivery Location
                </div>

                <div>
                    <span className="legend-line"></span>
                    Suggested Route
                </div>

            </div>


            <div className="route-safety-note">

                <div className="safety-icon">
                    🔐
                </div>

                <div>
                    <h2>Delivery Safety</h2>

                    <p>
                        Confirm the pickup OTP when collecting the food and
                        the delivery OTP when handing it over to the NGO.
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default VolunteerMap;