import { Link, useSearchParams } from "react-router-dom";
import "./Register.css";

function Register() {

    const [searchParams] = useSearchParams();

    const role = searchParams.get("role");

    const roleNames = {
        restaurant: "Restaurant",
        ngo: "NGO",
        volunteer: "Volunteer"
    };

    const selectedRole = roleNames[role];

    // Agar koi invalid role ke saath register page open kare
    if (!selectedRole) {
        return (
            <div className="invalid-role">
                <h2>Please select a valid role.</h2>

                <Link to="/roles">
                    Choose Role
                </Link>
            </div>
        );
    }


    return (
        <div className="register-page">

            <div className="register-card">

                {/* Logo */}

                <div className="register-logo">
                    🌱 FoodBridge <span>AI</span>
                </div>


                {/* Heading */}

                <h1>
                    Create Your Account
                </h1>

                <p className="register-subtitle">
                    Register as a {selectedRole}
                </p>


                <form>

                    {/* Common field */}

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                        />

                    </div>


                    {/* Restaurant specific */}

                    {role === "restaurant" && (

                        <div className="form-group">

                            <label>Restaurant Name</label>

                            <input
                                type="text"
                                placeholder="Enter restaurant name"
                            />

                        </div>

                    )}


                    {/* NGO specific */}

                    {role === "ngo" && (

                        <div className="form-group">

                            <label>NGO Name</label>

                            <input
                                type="text"
                                placeholder="Enter NGO name"
                            />

                        </div>

                    )}


                    {/* Volunteer specific */}

                    {role === "volunteer" && (

                        <div className="form-group">

                            <label>Age</label>

                            <input
                                type="number"
                                placeholder="Enter your age"
                            />

                        </div>

                    )}


                    {/* Email */}

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>


                    {/* Phone */}

                    <div className="form-group">

                        <label>Phone Number</label>

                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                        />

                    </div>


                    {/* Location */}

                    <div className="form-group">

                        <label>Location</label>

                        <input
                            type="text"
                            placeholder="Enter your location"
                        />

                    </div>


                    {/* Password */}

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create a password"
                        />

                    </div>


                    {/* Confirm Password */}

                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                        />

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Create Account
                    </button>

                </form>


                {/* Login */}

                <p className="login-text">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>


                {/* Back */}

                <Link
                    to="/roles"
                    className="back-link"
                >
                    ← Choose another role
                </Link>

            </div>

        </div>
    );
}

export default Register;