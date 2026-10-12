import DashboardLayout from "../../layouts/DashboardLayout";
import "./History.css";

function History() {
    return (
        <DashboardLayout
            title="Delivery History"
            subtitle="View your completed pickups and deliveries"
            role="Volunteer"
        >

            <div className="history-header">

                <div>
                    <h1>Delivery History 📋</h1>

                    <p>
                        Track all the food deliveries you have completed.
                    </p>
                </div>

                <div className="history-filter">

                    <select>
                        <option>All Deliveries</option>
                        <option>This Month</option>
                        <option>Last Month</option>
                    </select>

                </div>

            </div>


            <div className="history-summary">

                <div className="history-summary-card">
                    <div className="history-summary-icon">
                        ✅
                    </div>

                    <div>
                        <strong>12</strong>
                        <span>Completed Deliveries</span>
                    </div>
                </div>


                <div className="history-summary-card">
                    <div className="history-summary-icon">
                        🍱
                    </div>

                    <div>
                        <strong>320</strong>
                        <span>Meals Delivered</span>
                    </div>
                </div>


                <div className="history-summary-card">
                    <div className="history-summary-icon">
                        📍
                    </div>

                    <div>
                        <strong>48.6 km</strong>
                        <span>Total Distance</span>
                    </div>
                </div>


                <div className="history-summary-card">
                    <div className="history-summary-icon">
                        🌱
                    </div>

                    <div>
                        <strong>320</strong>
                        <span>Meals Saved</span>
                    </div>
                </div>

            </div>


            <div className="history-section">

                <div className="history-section-header">

                    <div>
                        <h2>Completed Deliveries</h2>

                        <p>
                            Your recently completed food pickups
                        </p>
                    </div>

                    <span className="completed-count">
                        12 Completed
                    </span>

                </div>


                <div className="history-list">


                    <div className="history-item">

                        <div className="history-food-icon">
                            🍚
                        </div>


                        <div className="history-food-info">

                            <h3>Vegetable Rice</h3>

                            <p>
                                Green Leaf Restaurant → Hope Foundation NGO
                            </p>

                            <small>
                                September 16, 2026 • 30 Meals
                            </small>

                        </div>


                        <div className="history-distance">

                            <span>Distance</span>

                            <strong>
                                6.3 km
                            </strong>

                        </div>


                        <div className="history-status completed">
                            Delivered
                        </div>

                    </div>



                    <div className="history-item">

                        <div className="history-food-icon">
                            🍛
                        </div>


                        <div className="history-food-info">

                            <h3>Paneer Curry</h3>

                            <p>
                                Spice Garden → Helping Hands NGO
                            </p>

                            <small>
                                September 14, 2026 • 25 Meals
                            </small>

                        </div>


                        <div className="history-distance">

                            <span>Distance</span>

                            <strong>
                                6.3 km
                            </strong>

                        </div>


                        <div className="history-status completed">
                            Delivered
                        </div>

                    </div>



                    <div className="history-item">

                        <div className="history-food-icon">
                            🫓
                        </div>


                        <div className="history-food-info">

                            <h3>Chapati & Sabzi</h3>

                            <p>
                                Royal Kitchen → Care & Share NGO
                            </p>

                            <small>
                                September 12, 2026 • 40 Meals
                            </small>

                        </div>


                        <div className="history-distance">

                            <span>Distance</span>

                            <strong>
                                8.3 km
                            </strong>

                        </div>


                        <div className="history-status completed">
                            Delivered
                        </div>

                    </div>



                    <div className="history-item">

                        <div className="history-food-icon">
                            🍲
                        </div>


                        <div className="history-food-info">

                            <h3>Mixed Vegetable Meal</h3>

                            <p>
                                Food Corner → Hope Foundation NGO
                            </p>

                            <small>
                                September 10, 2026 • 35 Meals
                            </small>

                        </div>


                        <div className="history-distance">

                            <span>Distance</span>

                            <strong>
                                5.8 km
                            </strong>

                        </div>


                        <div className="history-status completed">
                            Delivered
                        </div>

                    </div>

                </div>

            </div>


            <div className="history-impact-card">

                <div className="impact-icon">
                    🌱
                </div>

                <div>
                    <h2>Your Contribution Matters</h2>

                    <p>
                        Every successful delivery helps reduce food waste
                        and provides meals to people who need them.
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default History;