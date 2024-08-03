import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <main className="mainContent">
        <section className="heroSection">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop destination for all things books and more.</p>
        </section>
        <section className="featuresSection">
          <div className="feature">
            <h2>About Us</h2>
            <p>Learn more about our mission and values.</p>
          </div>
          <div className="feature">
            <h2>Books</h2>
            <p>Explore our vast collection of books.</p>
          </div>
          <div className="feature">
            <h2>New Releases</h2>
            <p>Check out the latest additions to our collection.</p>
          </div>
          <div className="feature">
            <h2>Contact Us</h2>
            <p>Get in touch with us for any queries or feedback.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
