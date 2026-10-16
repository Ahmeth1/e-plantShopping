import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const img = (text) =>
  `https://placehold.co/300x300/2e8b57/ffffff?text=${text.replace(/ /g, '+')}`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('Snake Plant'), description: 'Produces oxygen at night and removes toxins from the air.', cost: 15 },
      { name: 'Spider Plant', image: img('Spider Plant'), description: 'Easy to grow and great at filtering indoor air.', cost: 12 },
      { name: 'Peace Lily', image: img('Peace Lily'), description: 'Elegant white flowers that remove mold spores and toxins.', cost: 18 },
      { name: 'Boston Fern', image: img('Boston Fern'), description: 'Lush green fronds that add humidity and clean the air.', cost: 20 },
      { name: 'Rubber Plant', image: img('Rubber Plant'), description: 'Large glossy leaves that absorb airborne chemicals.', cost: 25 },
      { name: 'Areca Palm', image: img('Areca Palm'), description: 'A natural humidifier with feathery, tropical leaves.', cost: 30 },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: img('Lavender'), description: 'Calming fragrance that promotes relaxation and sleep.', cost: 20 },
      { name: 'Jasmine', image: img('Jasmine'), description: 'Sweet-scented flowers that fill the room with fragrance.', cost: 18 },
      { name: 'Rosemary', image: img('Rosemary'), description: 'Fragrant herb used in cooking and aromatherapy.', cost: 15 },
      { name: 'Mint', image: img('Mint'), description: 'Fresh, cooling scent and great for teas and drinks.', cost: 12 },
      { name: 'Lemon Balm', image: img('Lemon Balm'), description: 'Lemon-scented leaves that soothe and uplift the mood.', cost: 14 },
      { name: 'Basil', image: img('Basil'), description: 'Aromatic leaves loved in kitchens and gardens alike.', cost: 10 },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Aloe Vera', image: img('Aloe Vera'), description: 'Soothing gel that helps heal burns and skin irritation.', cost: 14 },
      { name: 'Chamomile', image: img('Chamomile'), description: 'Calming flowers often used to make relaxing tea.', cost: 13 },
      { name: 'Calendula', image: img('Calendula'), description: 'Bright flowers used in skin-soothing creams and ointments.', cost: 16 },
      { name: 'Echinacea', image: img('Echinacea'), description: 'Traditionally used to support the immune system.', cost: 19 },
      { name: 'Tulsi', image: img('Tulsi'), description: 'Holy basil, valued in traditional herbal remedies.', cost: 17 },
      { name: 'Feverfew', image: img('Feverfew'), description: 'Daisy-like flowers used in traditional herbal medicine.', cost: 15 },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>
        <div className="navbar-links">
          <a href="#home" onClick={handleHomeClick}>Home</a>
          <a href="#plants" onClick={handlePlantsClick}>Plants</a>
          <a href="#cart" onClick={handleCartClick} className="cart-link">
            <span role="img" aria-label="cart">🛒</span> Cart
            <span className="cart-count">{totalItems}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-page">
          {plantsArray.map((section) => (
            <section key={section.category}>
              <h2 className="category-title">{section.category}</h2>
              <div className="product-list">
                {section.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-cost">${plant.cost}</p>
                    <button
                      type="button"
                      className="product-button"
                      disabled={isInCart(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;