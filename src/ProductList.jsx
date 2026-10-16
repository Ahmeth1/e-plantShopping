function ProductList({ onHomeClick }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Plants coming soon</h2>
      <button type="button" onClick={onHomeClick}>
        Home
      </button>
    </div>
  );
}

export default ProductList;