import { Link } from "react-router-dom";
import "./RoleSelection.css";

function RoleSelection() {
    return (
        <div className="role-page">

            <div className="role-header">
                <h1>How do you want to contribute?</h1>

                <p>
                    Choose your role to get started with FoodBridge AI.
                </p>
            </div>

            <div className="role-selection-cards">

                {/* Restaurant */}
                <div className="selection-card">

                    <div className="selection-icon">
                        🍴
                    </div>

                    <h2>Restaurant</h2>

                    <p>
                        Donate surplus food from your restaurant
                        and help reduce food waste.
                    </p>

                    <Link to="/register?role=restaurant">
                        Continue as Restaurant →
                    </Link>

                </div>


                {/* NGO */}
                <div className="selection-card">

                    <div className="selection-icon">
                        🏢
                    </div>

                    <h2>NGO</h2>

                    <p>
                        Request food for beneficiaries or donate
                        surplus food received from others.
                    </p>

                    <Link to="/register?role=ngo">
                        Continue as NGO →
                    </Link>

                </div>


                {/* Volunteer */}
                <div className="selection-card">

                    <div className="selection-icon">
                        🚴
                    </div>

                    <h2>Volunteer</h2>

                    <p>
                        Help collect surplus food and deliver it
                        safely to NGOs.
                    </p>

                    <Link to="/register?role=volunteer">
                        Continue as Volunteer →
                    </Link>

                </div>

            </div>


            <div className="role-footer">

                <p>Already have an account?</p>

                <Link to="/login">
                    Login
                </Link>

            </div>

        </div>
    );
}

export default RoleSelection;