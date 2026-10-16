function CartItem({ onContinueShopping }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Shopping Cart (coming soon)</h2>
      <button type="button" onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;