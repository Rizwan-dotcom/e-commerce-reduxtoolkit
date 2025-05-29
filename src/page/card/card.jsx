import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import { addToCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

export const CardComponent = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold text-gray-300"> All Products</h2>
      {loading ? "" : <p className="text-red-600">{loading}</p>}
      {error ? "" : <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 mx-3 gap-3">
        {items.map((product) => (
          <div
            key={product.id}
            className="border border-gray-400 rounded-sm shadow-lg min-h-[300px]"
          >
              <Link to={`/product-detail/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className=" w-full px-10 h-[320px] py-3 transition ease-in-out hover:scale-105"
                />
              </Link>
                <div className="flex flex-col justify-center">
              <h2 className="text-xl px-3 pt-4">
                <Link
                  to={`/product-detail/${product.id}`}
                  className="no-underline text-gray-300 font-bold line-clamp-2"
                  >
                  {product.title}
                </Link>
              </h2>
              <p className="px-3 line-clamp-2 text-sm text-gray-400">{product.description}</p>
              <div className="border-t-[1px] mx-3 mb-2 border-gray-500"></div>
              <h5 className="px-3 text-2xl font-bold text-gray-300">{product.price} PLN</h5>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="mx-3 bg-red-800 rounded hover:bg-red-600 text-center my-4 h-10 text-white"
                >
                Add to cart
              </button>
                </div>
            </div>
        ))}
        <footer className="footer"></footer>
      </div>
    </div>
  );
};
