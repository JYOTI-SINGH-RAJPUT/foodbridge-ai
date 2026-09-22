import { Link } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
    return (
        <div className="dashboard-container">

            {/* Sidebar */}
            <aside className="sidebar">

                <div className="sidebar-logo">
                    🌱 FoodBridge <span>AI</span>
                </div>

                <nav className="sidebar-menu">

                    <Link to="/dashboard/restaurant">
                        🏠 Dashboard
                    </Link>

                    <Link to="/donations">
                        🍱 Donations
                    </Link>

                    <Link to="/requests">
                        📋 Requests
                    </Link>

                    <Link to="/pickups">
                        🚴 Pickups
                    </Link>

                    <Link to="/map">
                        📍 Map
                    </Link>

                    <Link to="/impact">
                        📊 My Impact
                    </Link>

                </nav>

                <div className="sidebar-bottom">

                    <Link to="/profile">
                        👤 Profile
                    </Link>

                    <Link to="/">
                        🚪 Logout
                    </Link>

                </div>

            </aside>


            {/* Main Area */}
            <main className="dashboard-main">

                <header className="dashboard-navbar">

                    <div>
                        <h2>Restaurant Dashboard</h2>
                        <p>Welcome to FoodBridge AI</p>
                    </div>

                    <div className="user-info">

                        <div className="user-avatar">
                            J
                        </div>

                        <div>
                            <strong>Jyoti</strong>
                            <span>Restaurant</span>
                        </div>

                    </div>

                </header>


                <section className="dashboard-content">
                    {children}
                </section>

            </main>

        </div>
    );
}

export default DashboardLayout;