import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { fetchById } from "../store/slices/productSlice";
import { useEffect } from "react";
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);
  console.log("proe", product);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return <p style={{ color: "red" }}>Product not found</p>;
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row p-3 my-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-52 mb-8"
        />
        <div className="flex flex-col w-full md:w-1/3 items-start">
          <h2 className="text-3xl font-bold text-gray-400">{product.title}</h2>
          <p className="text-gray-400 font-semibold">{product.description}</p>
          <h4 className="text-3xl text-gray-400 font-bold">
            {product.price.toFixed(2)} PLN
          </h4>
          <button
            onClick={() => dispatch(addToCart(product))}
            className=" bg-red-800 rounded hover:bg-red-600 text-center my-2 text-white w-1/2 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
