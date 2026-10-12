import DashboardLayout from "../../layouts/DashboardLayout";
import "./AvailablePickups.css";

function AvailablePickups() {
    return (
        <DashboardLayout
            title="Available Pickups"
            subtitle="Find and accept food pickups near you"
            role="Volunteer"
        >

            <div className="available-pickups-header">

                <div>
                    <h1>Available Pickups 🚴</h1>
                    <p>
                        Choose a pickup and help deliver surplus food to an NGO.
                    </p>
                </div>

                <div className="pickup-location">
                    📍 Lucknow
                </div>

            </div>


            <div className="pickup-filter-bar">

                <input
                    type="text"
                    placeholder="Search restaurant or food..."
                />

                <select>
                    <option value="">All Pickups</option>
                    <option value="urgent">Urgent</option>
                    <option value="nearby">Nearby</option>
                </select>

                <select>
                    <option value="">Sort By</option>
                    <option value="distance">Nearest First</option>
                    <option value="urgency">Most Urgent</option>
                    <option value="quantity">Highest Quantity</option>
                </select>

            </div>


            <div className="pickup-grid">


                <div className="pickup-card">

                    <div className="pickup-card-top">

                        <div className="pickup-icon">
                            🍚
                        </div>

                        <span className="urgent-pickup-badge">
                            High Priority
                        </span>

                    </div>


                    <h2>Vegetable Rice</h2>

                    <p className="pickup-description">
                        Freshly prepared vegetable rice ready
                        for immediate pickup and delivery.
                    </p>


                    <div className="pickup-details">

                        <div>
                            <span>Quantity</span>
                            <strong>30 Meals</strong>
                        </div>

                        <div>
                            <span>Pickup</span>
                            <strong>2.5 km</strong>
                        </div>

                        <div>
                            <span>Delivery</span>
                            <strong>3.8 km</strong>
                        </div>

                    </div>


                    <div className="pickup-route">

                        <div className="route-point">

                            <span className="route-icon">
                                🏪
                            </span>

                            <div>
                                <small>Pickup from</small>
                                <strong>Green Leaf Restaurant</strong>
                            </div>

                        </div>


                        <div className="route-line"></div>


                        <div className="route-point">

                            <span className="route-icon">
                                🏢
                            </span>

                            <div>
                                <small>Deliver to</small>
                                <strong>Hope Foundation NGO</strong>
                            </div>

                        </div>

                    </div>


                    <div className="pickup-meta">

                        <span>
                            ⏱ Expires in 2 hours
                        </span>

                        <span>
                            🤖 AI Score: 92/100
                        </span>

                    </div>


                    <button className="accept-pickup-btn">
                        Accept Pickup →
                    </button>

                </div>



                <div className="pickup-card">

                    <div className="pickup-card-top">

                        <div className="pickup-icon">
                            🍛
                        </div>

                        <span className="available-pickup-badge">
                            Available
                        </span>

                    </div>


                    <h2>Paneer Curry</h2>

                    <p className="pickup-description">
                        Fresh paneer curry packed and ready
                        for redistribution.
                    </p>


                    <div className="pickup-details">

                        <div>
                            <span>Quantity</span>
                            <strong>25 Meals</strong>
                        </div>

                        <div>
                            <span>Pickup</span>
                            <strong>4.1 km</strong>
                        </div>

                        <div>
                            <span>Delivery</span>
                            <strong>2.2 km</strong>
                        </div>

                    </div>


                    <div className="pickup-route">

                        <div className="route-point">

                            <span className="route-icon">
                                🏪
                            </span>

                            <div>
                                <small>Pickup from</small>
                                <strong>Spice Garden</strong>
                            </div>

                        </div>


                        <div className="route-line"></div>


                        <div className="route-point">

                            <span className="route-icon">
                                🏢
                            </span>

                            <div>
                                <small>Deliver to</small>
                                <strong>Helping Hands NGO</strong>
                            </div>

                        </div>

                    </div>


                    <div className="pickup-meta">

                        <span>
                            ⏱ Expires in 5 hours
                        </span>

                        <span>
                            🤖 AI Score: 84/100
                        </span>

                    </div>


                    <button className="accept-pickup-btn">
                        Accept Pickup →
                    </button>

                </div>



                <div className="pickup-card">

                    <div className="pickup-card-top">

                        <div className="pickup-icon">
                            🫓
                        </div>

                        <span className="available-pickup-badge">
                            Available
                        </span>

                    </div>


                    <h2>Chapati & Sabzi</h2>

                    <p className="pickup-description">
                        Fresh chapati and vegetable sabzi
                        available for delivery.
                    </p>


                    <div className="pickup-details">

                        <div>
                            <span>Quantity</span>
                            <strong>40 Meals</strong>
                        </div>

                        <div>
                            <span>Pickup</span>
                            <strong>5.2 km</strong>
                        </div>

                        <div>
                            <span>Delivery</span>
                            <strong>3.1 km</strong>
                        </div>

                    </div>


                    <div className="pickup-route">

                        <div className="route-point">

                            <span className="route-icon">
                                🏪
                            </span>

                            <div>
                                <small>Pickup from</small>
                                <strong>Royal Kitchen</strong>
                            </div>

                        </div>


                        <div className="route-line"></div>


                        <div className="route-point">

                            <span className="route-icon">
                                🏢
                            </span>

                            <div>
                                <small>Deliver to</small>
                                <strong>Care & Share NGO</strong>
                            </div>

                        </div>

                    </div>


                    <div className="pickup-meta">

                        <span>
                            ⏱ Expires in 7 hours
                        </span>

                        <span>
                            🤖 AI Score: 76/100
                        </span>

                    </div>


                    <button className="accept-pickup-btn">
                        Accept Pickup →
                    </button>

                </div>

            </div>


            <div className="ai-route-card">

                <div className="ai-route-icon">
                    🤖
                </div>

                <div>
                    <h2>AI Route Recommendation</h2>

                    <p>
                        The first pickup is currently the most urgent.
                        Accepting it can help prevent food from going to waste.
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default AvailablePickups;