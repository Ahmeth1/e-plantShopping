import { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1>Welcome to Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="tagline">Where Green Meets Serenity</p>
              <button
                type="button"
                className="get-started-button"
                onClick={() => setShowProductList(true)}
              >
                Get Started
              </button>
            </div>
            <div className="about-container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;