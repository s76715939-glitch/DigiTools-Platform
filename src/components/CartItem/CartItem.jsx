import toast from "react-hot-toast";

const CartItem = ({ cp, cartProducts, setCartProducts }) => {
  const removeCartItem = (cp) => {
    const updatedProducts = cartProducts.filter((item) => item.id !== cp.id);
    setCartProducts(updatedProducts);
    toast.success(`${cp.name} is removed from cart`);
  };
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-[#f9fafb] rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-13 h-13 bg-white rounded-full shadow-sm">
          <img
            src={`../assets/products/${cp.icon}.png`}
            alt={cp.icon}
            className="w-8"
          />
        </div>
        <div>
          <h4 className="text-[15px] font-semibold text-[#1a1f2e]">
            {cp.name}
          </h4>
          <p className="text-[13px] font-medium text-[#7a849a] mt-0.5">
            ${cp.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeCartItem(cp)}
        className="text-[13px] font-semibold text-[#ff4b72] hover:text-[#e63e5c] transition-colors cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
