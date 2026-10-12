import { Link } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout({
    children,
    title = "Dashboard",
    subtitle = "Welcome to FoodBridge AI",
    role = "Restaurant"
}) {

    // Role ke according sidebar items
    const sidebarItems = {

        restaurant: [
            {
                name: "Dashboard",
                icon: "🏠",
                path: "/dashboard/restaurant"
            },
            {
                name: "Donations",
                icon: "🍱",
                path: "/dashboard/restaurant/donations"
            },
            {
                name: "NGO Requests",
                icon: "📋",
                path: "/requests"
            },
            {
                name: "Pickups",
                icon: "🚴",
                path: "/pickups"
            },
            {
                name: "Map",
                icon: "📍",
                path: "/map"
            },
            {
                name: "My Impact",
                icon: "📊",
                path: "/impact"
            }
        ],

        ngo: [
            {
                name: "Dashboard",
                icon: "🏠",
                path: "/dashboard/ngo"
            },
            {
                name: "Available Food",
                icon: "🍱",
                path: "/ngo/available-food"
            },
            {
                name: "My Requests",
                icon: "📋",
                path: "/ngo/requests"
            },
            {
                name: "Donate Surplus",
                icon: "🤝",
                path: "/ngo/donate-food"
            },
            {
                name: "Pickups",
                icon: "🚴",
                path: "/pickups"
            },
            {
                name: "Map",
                icon: "📍",
                path: "/map"
            },
            {
                name: "My Impact",
                icon: "📊",
                path: "/impact"
            }
        ],

        volunteer: [
            {
                name: "Dashboard",
                icon: "🏠",
                path: "/dashboard/volunteer"
            },
            {
                name: "Available Pickups",
                icon: "📦",
                path: "/volunteer/pickups"
            },
            {
                name: "My Pickups",
                icon: "🚴",
                path: "/volunteer/my-pickups"
            },
            {
                name: "Map",
                icon: "📍",
                path: "/map"
            },
            {
                name: "History",
                icon: "📋",
                path: "/volunteer/history"
            },
            {
                name: "My Impact",
                icon: "📊",
                path: "/impact"
            }
        ]

    };

    // Role ko lowercase mein convert kar rahe hain
    const currentRole = role.toLowerCase();

    // Current role ke sidebar items
    const currentSidebar =
        sidebarItems[currentRole] || sidebarItems.restaurant;


    return (
        <div className="dashboard-container">

            {/* ================= SIDEBAR ================= */}

            <aside className="sidebar">

                <div className="sidebar-logo">
                    🌱 FoodBridge <span>AI</span>
                </div>


                <nav className="sidebar-menu">

                    {currentSidebar.map((item) => (

                        <Link
                            key={item.name}
                            to={item.path}
                        >
                            {item.icon} {item.name}
                        </Link>

                    ))}

                </nav>


                {/* Sidebar Bottom */}

                <div className="sidebar-bottom">

                    <Link to="/profile">
                        👤 Profile
                    </Link>

                    <Link to="/">
                        🚪 Logout
                    </Link>

                </div>

            </aside>


            {/* ================= MAIN AREA ================= */}

            <main className="dashboard-main">

                {/* Navbar */}

                <header className="dashboard-navbar">

                    <div>

                        <h2>{title}</h2>

                        <p>{subtitle}</p>

                    </div>


                    {/* User Information */}

                    <div className="user-info">

                        <div className="user-avatar">
                            A
                        </div>

                        <div>

                            <strong>Adam</strong>

                            <span>{role}</span>

                        </div>

                    </div>

                </header>


                {/* Page Content */}

                <section className="dashboard-content">

                    {children}

                </section>

            </main>

        </div>
    );
}

export default DashboardLayout;