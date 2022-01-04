const Cart = ({
  RemoveFromCart,
  cart,
  setCart,
  cartVisible,
  setCartVisible,
  addToCart,
}) => {
  /* console.log("cart", cart); */
  return cartVisible ? (
    <div className="paymentBox">
      <div className="payment-button">
        <button>Valider votre panier</button>
      </div>
      {cart.map((cart, index) => {
        return (
          <div key={index} className="cart-box">
            <span className="count">
              <span
                onClick={() => {
                  RemoveFromCart(cart);
                }}
              >
                -
              </span>
              <span>{cart.quantity}</span>{" "}
              <span
                onClick={() => {
                  addToCart(cart);
                }}
              >
                +
              </span>
            </span>
            <p>{cart.title}</p>
            <p className="price">{cart.price} €</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="emptyCart">
      <p> Panier vide</p>
    </div>
  );
};

export default Cart;
