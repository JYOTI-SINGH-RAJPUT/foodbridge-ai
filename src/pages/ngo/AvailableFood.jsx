import DashboardLayout from "../../layouts/DashboardLayout";
import "./AvailableFood.css";

function AvailableFood() {
    return (
        <DashboardLayout
            title="Available Food"
            subtitle="Find surplus food available near your location"
            role="NGO"
        >

            <div className="available-food-header">

                <div>
                    <h1>Available Food 🍱</h1>

                    <p>
                        Find surplus food from nearby restaurants and NGOs
                        and request what your beneficiaries need.
                    </p>
                </div>

                <div className="food-location">
                    📍 Lucknow
                </div>

            </div>


            <div className="food-filter-bar">

                <input
                    type="text"
                    placeholder="Search food..."
                />

                <select>
                    <option value="">All Categories</option>
                    <option value="rice">Rice & Meals</option>
                    <option value="bread">Bread & Bakery</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="curry">Curry & Gravy</option>
                </select>

                <select>
                    <option value="">Sort By</option>
                    <option value="nearest">Nearest First</option>
                    <option value="urgent">Most Urgent</option>
                    <option value="quantity">Highest Quantity</option>
                </select>

            </div>


            <div className="available-food-grid">


                <div className="food-card">

                    <div className="food-card-top">
                        <div className="food-card-icon">
                            🍚
                        </div>

                        <span className="urgent-badge">
                            High Priority
                        </span>
                    </div>

                    <h2>Vegetable Rice</h2>

                    <p className="food-description">
                        Freshly prepared vegetable rice available
                        for immediate redistribution.
                    </p>

                    <div className="food-details">

                        <div>
                            <span>Quantity</span>
                            <strong>30 Meals</strong>
                        </div>

                        <div>
                            <span>Distance</span>
                            <strong>2.5 km</strong>
                        </div>

                        <div>
                            <span>Expires</span>
                            <strong>2 hours</strong>
                        </div>

                    </div>

                    <div className="food-donor">

                        <span>🏪</span>

                        <div>
                            <small>Donated by</small>
                            <strong>Green Leaf Restaurant</strong>
                        </div>

                    </div>

                    <div className="ai-recommendation">
                        🤖 AI recommends this donation because of its high urgency.
                    </div>

                    <button className="request-food-btn">
                        Request Food →
                    </button>

                </div>


                <div className="food-card">

                    <div className="food-card-top">

                        <div className="food-card-icon">
                            🍛
                        </div>

                        <span className="available-badge">
                            Available
                        </span>

                    </div>

                    <h2>Paneer Curry</h2>

                    <p className="food-description">
                        Fresh paneer curry suitable for immediate distribution.
                    </p>

                    <div className="food-details">

                        <div>
                            <span>Quantity</span>
                            <strong>25 Meals</strong>
                        </div>

                        <div>
                            <span>Distance</span>
                            <strong>4.1 km</strong>
                        </div>

                        <div>
                            <span>Expires</span>
                            <strong>5 hours</strong>
                        </div>

                    </div>

                    <div className="food-donor">

                        <span>🏪</span>

                        <div>
                            <small>Donated by</small>
                            <strong>Spice Garden</strong>
                        </div>

                    </div>

                    <div className="ai-recommendation">
                        🤖 Good match based on your NGO's current food demand.
                    </div>

                    <button className="request-food-btn">
                        Request Food →
                    </button>

                </div>


                <div className="food-card">

                    <div className="food-card-top">

                        <div className="food-card-icon">
                            🫓
                        </div>

                        <span className="available-badge">
                            Available
                        </span>

                    </div>

                    <h2>Chapati & Sabzi</h2>

                    <p className="food-description">
                        Fresh chapati and vegetable sabzi available
                        for redistribution.
                    </p>

                    <div className="food-details">

                        <div>
                            <span>Quantity</span>
                            <strong>40 Meals</strong>
                        </div>

                        <div>
                            <span>Distance</span>
                            <strong>5.2 km</strong>
                        </div>

                        <div>
                            <span>Expires</span>
                            <strong>7 hours</strong>
                        </div>

                    </div>

                    <div className="food-donor">

                        <span>🏪</span>

                        <div>
                            <small>Donated by</small>
                            <strong>Royal Kitchen</strong>
                        </div>

                    </div>

                    <div className="ai-recommendation">
                        🤖 Suitable for your current beneficiary demand.
                    </div>

                    <button className="request-food-btn">
                        Request Food →
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default AvailableFood;