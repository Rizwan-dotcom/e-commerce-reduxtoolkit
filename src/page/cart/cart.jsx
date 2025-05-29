import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="mx-3 mt-12 mb-24">
      {items.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-8">
          <i class="bi bi-cart-x text-red-700 text-9xl font-bold"></i>
          <h2 className="text-2xl font-bold text-gray-400">
            Your basket is empty
          </h2>
          <Link to="/">
            <button className="text-white bg-red-800 hover:bg-red-600 py-2 px-4 rounded">
              Start shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-wrapper items-start">
            <div className="cart-left">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-80 h-36 lg:w-80 lg:h-44"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <h2 className="text-xs lg:text-sm font-semibold text-gray-400">
                        {item.title}
                      </h2>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        <i className="bi bi-trash3 text-gray-400 text-sm lg:text-lg text-end"></i>
                      </button>
                    </div>
                    <h5 className="text-lg lg:text-2x font-bold text-gray-400">
                      {item.price} PLN
                    </h5>
                    <div className="quantity-box">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                      className="button"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                      <span className="quantity-count">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                       className="button"
                       
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-400 mb-5">
                Order Summary ({items.length} item{items.length > 1 ? "s" : ""})
              </h2>

              <div className="flex justify-between my-2">
                <p className="text-gray-400">Initial price</p>
                <h2 className="text-lg font-bold text-gray-400">
                  {totalPrice.toFixed(2)} PLN
                </h2>
              </div>
              <div className="flex justify-between my-2">
                <p className="text-gray-400">Delivery</p>
                <h2 className="text-lg font-bold text-green-800">Free</h2>
              </div>
              <hr className="my-4 text-gray-400" />
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-gray-400">Total price</h2>
                <h2 className="text-xl font-bold text-gray-400">
                  {totalPrice.toFixed(2)} PLN
                </h2>
              </div>

              <button className="mt-6 w-full bg-red-800 text-white py-2 rounded hover:bg-red-700 transition">
                Go to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
