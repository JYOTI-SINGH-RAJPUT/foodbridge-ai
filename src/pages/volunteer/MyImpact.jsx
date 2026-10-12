import DashboardLayout from "../../layouts/DashboardLayout";
import "./MyImpact.css";

function MyImpact() {
    return (
        <DashboardLayout
            title="My Impact"
            subtitle="See the difference you are making with FoodBridge AI"
            role="Volunteer"
        >

            <div className="impact-header">

                <div>
                    <h1>My Impact 🌱</h1>

                    <p>
                        Every pickup and delivery helps reduce food waste
                        and supports communities in need.
                    </p>
                </div>

                <div className="impact-period">
                    📅 September 2026
                </div>

            </div>


            <div className="impact-main-stats">

                <div className="impact-stat-card">

                    <div className="impact-stat-icon">
                        🚴
                    </div>

                    <div>
                        <strong>12</strong>
                        <span>Completed Deliveries</span>
                    </div>

                </div>


                <div className="impact-stat-card">

                    <div className="impact-stat-icon">
                        🍱
                    </div>

                    <div>
                        <strong>320</strong>
                        <span>Meals Delivered</span>
                    </div>

                </div>


                <div className="impact-stat-card">

                    <div className="impact-stat-icon">
                        📍
                    </div>

                    <div>
                        <strong>48.6 km</strong>
                        <span>Distance Covered</span>
                    </div>

                </div>


                <div className="impact-stat-card">

                    <div className="impact-stat-icon">
                        👥
                    </div>

                    <div>
                        <strong>285</strong>
                        <span>People Helped</span>
                    </div>

                </div>

            </div>


            <div className="impact-content-grid">


                <div className="impact-chart-card">

                    <div className="impact-card-header">

                        <div>
                            <h2>Monthly Deliveries</h2>

                            <p>
                                Your delivery activity over the last 6 months
                            </p>
                        </div>

                    </div>


                    <div className="delivery-chart">

                        <div className="chart-y-axis">
                            <span>15</span>
                            <span>10</span>
                            <span>5</span>
                            <span>0</span>
                        </div>


                        <div className="chart-area">

                            <div className="chart-lines">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>


                            <div className="chart-bars">

                                <div className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: "45%" }}
                                    ></div>
                                    <span>Apr</span>
                                </div>


                                <div className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: "60%" }}
                                    ></div>
                                    <span>May</span>
                                </div>


                                <div className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: "40%" }}
                                    ></div>
                                    <span>Jun</span>
                                </div>


                                <div className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: "75%" }}
                                    ></div>
                                    <span>Jul</span>
                                </div>


                                <div className="chart-column">
                                    <div
                                        className="chart-bar"
                                        style={{ height: "65%" }}
                                    ></div>
                                    <span>Aug</span>
                                </div>


                                <div className="chart-column">
                                    <div
                                        className="chart-bar current"
                                        style={{ height: "90%" }}
                                    ></div>
                                    <span>Sep</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="environment-card">

                    <div className="impact-card-header">

                        <div>
                            <h2>Environmental Impact</h2>

                            <p>
                                Your contribution to reducing food waste
                            </p>
                        </div>

                    </div>


                    <div className="environment-circle">

                        <div>
                            <strong>320</strong>
                            <span>Meals Saved</span>
                        </div>

                    </div>


                    <div className="environment-stats">

                        <div>
                            <strong>160 kg</strong>
                            <span>Food Redistributed</span>
                        </div>

                        <div>
                            <strong>80 kg</strong>
                            <span>Waste Prevented</span>
                        </div>

                    </div>

                </div>

            </div>


            <div className="achievement-section">

                <div className="achievement-header">

                    <div>
                        <h2>Achievements 🏆</h2>

                        <p>
                            Milestones you have reached as a FoodBridge volunteer.
                        </p>
                    </div>

                </div>


                <div className="achievement-grid">

                    <div className="achievement-card unlocked">

                        <div className="achievement-icon">
                            🚴
                        </div>

                        <div>
                            <h3>First Delivery</h3>

                            <p>
                                Completed your first food delivery.
                            </p>

                            <span>Unlocked</span>
                        </div>

                    </div>


                    <div className="achievement-card unlocked">

                        <div className="achievement-icon">
                            🍱
                        </div>

                        <div>
                            <h3>100 Meals</h3>

                            <p>
                                Helped deliver more than 100 meals.
                            </p>

                            <span>Unlocked</span>
                        </div>

                    </div>


                    <div className="achievement-card unlocked">

                        <div className="achievement-icon">
                            🌱
                        </div>

                        <div>
                            <h3>Food Saver</h3>

                            <p>
                                Helped prevent food from being wasted.
                            </p>

                            <span>Unlocked</span>
                        </div>

                    </div>


                    <div className="achievement-card locked">

                        <div className="achievement-icon">
                            🏆
                        </div>

                        <div>
                            <h3>500 Meals</h3>

                            <p>
                                Deliver 500 meals to unlock this badge.
                            </p>

                            <span>180 meals remaining</span>
                        </div>

                    </div>

                </div>

            </div>


            <div className="impact-message">

                <div className="impact-message-icon">
                    💚
                </div>

                <div>
                    <h2>Keep Making an Impact!</h2>

                    <p>
                        Your time and effort help connect surplus food with
                        people who need it. Every delivery counts.
                    </p>
                </div>

            </div>

        </DashboardLayout>
    );
}

export default MyImpact;