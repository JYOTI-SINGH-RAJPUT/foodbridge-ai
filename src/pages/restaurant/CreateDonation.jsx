import DashboardLayout from "../../layouts/DashboardLayout";
import "./CreateDonation.css";

function CreateDonation() {
    return (
        <DashboardLayout>

            <div className="donation-page">

                {/* Page Header */}
                <div className="donation-header">
                    <div>
                        <h1>Create Food Donation</h1>
                        <p>
                            Share your surplus food with nearby NGOs.
                        </p>
                    </div>
                </div>


                {/* Donation Form */}
                <div className="donation-form-card">

                    <form>

                        {/* Food Name */}
                        <div className="form-group">
                            <label>Food Name</label>

                            <input
                                type="text"
                                placeholder="e.g. Vegetable Biryani"
                            />
                        </div>


                        {/* Category */}
                        <div className="form-row">

                            <div className="form-group">
                                <label>Food Category</label>

                                <select>
                                    <option value="">Select category</option>
                                    <option>Rice & Biryani</option>
                                    <option>Roti & Chapati</option>
                                    <option>Vegetables</option>
                                    <option>Snacks</option>
                                    <option>Fruits</option>
                                    <option>Desserts</option>
                                    <option>Other</option>
                                </select>
                            </div>


                            {/* Food Type */}
                            <div className="form-group">
                                <label>Food Type</label>

                                <select>
                                    <option value="">Select type</option>
                                    <option>Vegetarian</option>
                                    <option>Non-Vegetarian</option>
                                    <option>Vegan</option>
                                </select>
                            </div>

                        </div>


                        {/* Quantity */}
                        <div className="form-row">

                            <div className="form-group">
                                <label>Quantity</label>

                                <input
                                    type="number"
                                    placeholder="e.g. 50"
                                />
                            </div>


                            <div className="form-group">
                                <label>Unit</label>

                                <select>
                                    <option>Meals</option>
                                    <option>Kg</option>
                                    <option>Packets</option>
                                    <option>Plates</option>
                                </select>
                            </div>

                        </div>


                        {/* Prepared Time */}
                        <div className="form-row">

                            <div className="form-group">
                                <label>Prepared Date & Time</label>

                                <input type="datetime-local" />
                            </div>


                            {/* Expiry */}
                            <div className="form-group">
                                <label>Best Before / Expiry</label>

                                <input type="datetime-local" />
                            </div>

                        </div>


                        {/* Pickup Location */}
                        <div className="form-group">
                            <label>Pickup Location</label>

                            <input
                                type="text"
                                placeholder="Enter pickup address"
                            />
                        </div>


                        {/* Description */}
                        <div className="form-group">
                            <label>Additional Information</label>

                            <textarea
                                rows="4"
                                placeholder="Add any important information about the food..."
                            ></textarea>
                        </div>


                        {/* Image */}
                        <div className="form-group">
                            <label>Food Image</label>

                            <input type="file" accept="image/*" />

                            <small>
                                Upload a clear image of the donated food.
                            </small>
                        </div>


                        {/* AI Notice */}
                        <div className="ai-notice">

                            <div className="ai-notice-icon">
                                🤖
                            </div>

                            <div>
                                <strong>AI Smart Matching</strong>

                                <p>
                                    After submitting, FoodBridge AI will analyze
                                    the donation and recommend suitable nearby NGOs
                                    based on urgency, quantity, demand and distance.
                                </p>
                            </div>

                        </div>


                        {/* Buttons */}
                        <div className="form-actions">

                            <button
                                type="button"
                                className="cancel-btn"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="submit-donation-btn"
                            >
                                Submit Donation →
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default CreateDonation;