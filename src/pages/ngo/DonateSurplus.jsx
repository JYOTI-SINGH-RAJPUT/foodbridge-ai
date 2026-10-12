import DashboardLayout from "../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import "./DonateSurplus.css";

function DonateSurplus() {
    return (
        <DashboardLayout
            title="Donate Surplus Food"
            subtitle="Share extra food with another NGO"
            role="NGO"
        >

            <div className="donate-surplus-header">
                <div>
                    <h1>Donate Surplus Food 🤝</h1>
                    <p>
                        Have more food than your beneficiaries currently need?
                        Help another NGO by donating your surplus.
                    </p>
                </div>

                <Link
                    to="/dashboard/ngo"
                    className="back-dashboard-btn"
                >
                    ← Dashboard
                </Link>
            </div>


            <div className="donate-surplus-layout">

                {/* Form */}
                <div className="surplus-form-card">

                    <h2>Food Details</h2>

                    <p className="form-description">
                        Enter accurate information about the surplus food.
                    </p>


                    <div className="form-group">
                        <label>Food Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Vegetable Rice"
                        />
                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Food Category</label>

                            <select>
                                <option value="">
                                    Select Category
                                </option>
                                <option>Rice & Meals</option>
                                <option>Bread & Bakery</option>
                                <option>Vegetables</option>
                                <option>Curry & Gravy</option>
                                <option>Other</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label>Food Type</label>

                            <select>
                                <option value="">
                                    Select Type
                                </option>
                                <option>Cooked Food</option>
                                <option>Packaged Food</option>
                                <option>Fresh Food</option>
                            </select>
                        </div>

                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Quantity</label>

                            <input
                                type="number"
                                placeholder="e.g. 30"
                            />
                        </div>


                        <div className="form-group">
                            <label>Unit</label>

                            <select>
                                <option>Meals</option>
                                <option>Kg</option>
                                <option>Packets</option>
                                <option>Boxes</option>
                            </select>
                        </div>

                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Prepared Date & Time</label>

                            <input type="datetime-local" />
                        </div>


                        <div className="form-group">
                            <label>Best Before / Expiry</label>

                            <input type="datetime-local" />
                        </div>

                    </div>


                    <div className="form-group">
                        <label>Pickup Location</label>

                        <input
                            type="text"
                            placeholder="Enter pickup location"
                        />
                    </div>


                    <div className="form-group">
                        <label>Additional Information</label>

                        <textarea
                            rows="4"
                            placeholder="Add any important information about the food..."
                        ></textarea>
                    </div>


                    <div className="form-group">
                        <label>Food Image</label>

                        <input type="file" accept="image/*" />
                    </div>


                    <div className="food-safety-note">

                        <strong>⚠️ Food Safety</strong>

                        <p>
                            Please provide accurate preparation and expiry
                            information. Only donate food that is safe for
                            redistribution.
                        </p>

                    </div>


                    <div className="form-actions">

                        <Link
                            to="/dashboard/ngo"
                            className="cancel-btn"
                        >
                            Cancel
                        </Link>

                        <button className="submit-surplus-btn">
                            Donate Surplus Food →
                        </button>

                    </div>

                </div>


                {/* AI Matching */}
                <div className="surplus-side">

                    <div className="ai-match-card">

                        <div className="ai-match-icon">
                            🤖
                        </div>

                        <h2>AI Smart Matching</h2>

                        <p>
                            After you submit the donation, FoodBridge AI
                            can analyze food urgency, quantity, distance
                            and NGO demand to recommend suitable recipients.
                        </p>

                        <div className="ai-match-item">
                            <span>⏱️</span>
                            <div>
                                <strong>Expiry Urgency</strong>
                                <p>Prioritize food nearing expiry.</p>
                            </div>
                        </div>

                        <div className="ai-match-item">
                            <span>📍</span>
                            <div>
                                <strong>Distance</strong>
                                <p>Prefer nearby NGOs for faster pickup.</p>
                            </div>
                        </div>

                        <div className="ai-match-item">
                            <span>📦</span>
                            <div>
                                <strong>Quantity & Demand</strong>
                                <p>
                                    Match available quantity with NGO demand.
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="surplus-info-card">

                        <h3>How it works</h3>

                        <div className="how-step">
                            <span>1</span>
                            <p>Enter your surplus food details.</p>
                        </div>

                        <div className="how-step">
                            <span>2</span>
                            <p>FoodBridge AI identifies suitable NGOs.</p>
                        </div>

                        <div className="how-step">
                            <span>3</span>
                            <p>Nearby NGOs can request the donation.</p>
                        </div>

                        <div className="how-step">
                            <span>4</span>
                            <p>Volunteer pickup and delivery can be arranged.</p>
                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default DonateSurplus;