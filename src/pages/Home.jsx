import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">

            {/* Navbar */}
            <nav className="navbar">

                <div className="logo">
                    <span>🌱</span>
                    FoodBridge <strong class="ai">AI</strong>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#roles">Join Us</a>
                </div>

                <Link to="/login" className="login-btn">
                    Login
                </Link>

            </nav>


            {/* Hero Section */}
            <section className="hero" id="home">

                <div className="hero-content">

                    <p className="tagline">
                        AI-POWERED FOOD REDISTRIBUTION
                    </p>

                    <h1>
                       <span>Turning Surplus Food
                        <br />
                        Into Shared Meals</span> 
                    </h1>

                    <p className="hero-description">
                        FoodBridge AI connects restaurants, NGOs and volunteers
                        to rescue surplus food and deliver it to people who need it.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/roles" className="primary-btn">
                            Get Started →
                        </Link>

                        <button className="secondary-btn">
                            How It Works
                        </button>

                    </div>


                    {/* Small Stats */}
                    <div className="stats">

                        <div>
                            <h3>10K+</h3>
                            <p>Meals Rescued</p>
                        </div>

                        <div>
                            <h3>500+</h3>
                            <p>Donations</p>
                        </div>

                        <div>
                            <h3>100+</h3>
                            <p>NGOs Connected</p>
                        </div>

                    </div>

                </div>


                {/* Right Side Illustration */}
                <div className="hero-visual">

                    <div className="food-card">

                        <div className="card-icon">
                            🍱
                        </div>

                        <div>
                            <h3>Surplus Food</h3>
                            <p>50 meals available</p>
                        </div>

                        <span className="available">
                            Available
                        </span>

                    </div>


                    <div className="arrow">
                        ↓
                    </div>


                    <div className="ai-card">

                        <div className="card-icon">
                            🤖
                        </div>

                        <div>
                            <h3>AI Smart Match</h3>
                            <p>Finding suitable NGO...</p>
                        </div>

                        <strong>
                            94%
                        </strong>

                    </div>


                    <div className="arrow">
                        ↓
                    </div>


                    <div className="ngo-card">

                        <div className="card-icon">
                            🏢
                        </div>

                        <div>
                            <h3>Nearby NGO</h3>
                            <p>2.4 km away</p>
                        </div>

                        <span className="matched">
                            Matched
                        </span>

                    </div>

                </div>

            </section>


            {/* How It Works */}
            <section
                className="how-section"
                id="how-it-works"
            >

                <div className="section-heading">

                    <p>HOW IT WORKS</p>

                    <h2>
                        From Surplus to Someone's Plate
                    </h2>

                    <span>
                        A simple process powered by technology and community.
                    </span>

                </div>


                <div className="steps">

                    <div className="step-card">

                        <div className="step-number">
                            01
                        </div>

                        <div className="step-icon">
                            🍽️
                        </div>

                        <h3>
                            Donate
                        </h3>

                        <p>
                            Restaurants and NGOs list their surplus food
                            on FoodBridge.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            02
                        </div>

                        <div className="step-icon">
                            🤖
                        </div>

                        <h3>
                            AI Matching
                        </h3>

                        <p>
                            AI analyzes the donation and recommends
                            suitable nearby NGOs.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            03
                        </div>

                        <div className="step-icon">
                            🤝
                        </div>

                        <h3>
                            Request
                        </h3>

                        <p>
                            NGOs request available food according to
                            their requirements.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            04
                        </div>

                        <div className="step-icon">
                            🚚
                        </div>

                        <h3>
                            Deliver
                        </h3>

                        <p>
                            Volunteers pick up and deliver food to
                            the NGO.
                        </p>

                    </div>

                </div>

            </section>


            {/* Roles Section */}
            <section
                className="roles-section"
                id="roles"
            >

                <div className="section-heading">

                    <p>JOIN FOODBRIDGE</p>

                    <h2>
                        Everyone Has a Role to Play
                    </h2>

                    <span>
                        Choose how you want to contribute.
                    </span>

                </div>


                <div className="role-cards">

                    {/* Restaurant */}
                    <div className="role-card">

                        <div className="role-icon">
                            🍴
                        </div>

                        <h3>
                            Restaurant
                        </h3>

                        <p>
                            Donate your surplus food and help reduce
                            food waste.
                        </p>

                        <Link to="/register?role=restaurant">
                            Join as Restaurant →
                        </Link>

                    </div>


                    {/* NGO */}
                    <div className="role-card">

                        <div className="role-icon">
                            🏢
                        </div>

                        <h3>
                            NGO
                        </h3>

                        <p>
                            Request food for beneficiaries or donate
                            your own surplus food.
                        </p>

                        <Link to="/register?role=ngo">
                            Join as NGO →
                        </Link>

                    </div>


                    {/* Volunteer */}
                    <div className="role-card">

                        <div className="role-icon">
                            🚴
                        </div>

                        <h3>
                            Volunteer
                        </h3>

                        <p>
                            Help collect and deliver surplus food
                            to NGOs.
                        </p>

                        <Link to="/register?role=volunteer">
                            Join as Volunteer →
                        </Link>

                    </div>


                </div>

            </section>


            {/* Final CTA */}
            <section className="cta">

                <h2>
                    Together, We Can Reduce Food Waste.
                </h2>

                <p>
                    One donation can become someone's meal.
                </p>

                <button className="primary-btn">
                    Get Started →
                </button>

            </section>


            {/* Footer */}
            <footer className="footer">

                <div>

                    <h3>
                        🌱 FoodBridge AI
                    </h3>

                    <p>
                        Turning surplus food into shared meals.
                    </p>

                </div>

                <p>
                    © 2026 FoodBridge AI
                </p>

            </footer>

        </div>
    );
}

export default Home;