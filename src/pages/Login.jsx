import { Link, useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {

    const [searchParams] = useSearchParams();

    const role = searchParams.get("role");

    const roleNames = {
        restaurant: "Restaurant",
        ngo: "NGO",
        volunteer: "Volunteer",
    };

    const selectedRole = roleNames[role] || "User";

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-logo">
                    🌱 FoodBridge <span>AI</span>
                </div>

                <h1>Welcome Back</h1>

                <p className="login-subtitle">
                    Login to your {selectedRole} account
                </p>


                <form>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>


                    <div className="login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>


                    <button
                        type="submit"
                        className="login-submit"
                    >
                        Login
                    </button>

                </form>


                <p className="register-text">
                    Don't have an account?

                    <Link to="/roles">
                        Create Account
                    </Link>
                </p>


                <Link
                    to="/"
                    className="back-home"
                >
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
}

export default Login;