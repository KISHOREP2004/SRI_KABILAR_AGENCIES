import React from 'react';
import './About.css'; // Import custom CSS file

function About() {
    return (
        <div className="wrapper">
            {/* Bootstrap Header with Navbar */}
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">About</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                {/* Add more navbar links as needed */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            
            {/* Content about Sri Kabilar Agencies */}
            <div className="content">
                <div className="container mt-4">
                    <h1>Sri Kabilar Agencies</h1>
                    <p>
                        Sri Kabilar Agencies is a reputable provider of hardware and paints products. 
                        We offer a comprehensive range of high-quality items, including construction 
                        hardware and decorative paints, catering to the needs of contractors, builders, 
                        and homeowners. Our commitment to excellence ensures that our customers receive 
                        products that meet their exact requirements, enhancing the quality and durability 
                        of their projects.
                    </p>
                    <p>
                        With Sri Kabilar Agencies, you can trust that you're getting reliable products 
                        that deliver exceptional results, whether you're working on a DIY project or 
                        overseeing a large-scale construction venture.
                    </p>
                </div>
            </div>

            {/* Bootstrap Footer with Navbar */}
            <footer className="footer mt-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavFooter" aria-controls="navbarNavFooter" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavFooter">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                {/* Add more navbar links as needed */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container text-center py-3">
                    <p>Contact us for all your hardware and paints needs! Phone No : 94433-33332</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
