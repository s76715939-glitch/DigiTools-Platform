import toast from "react-hot-toast";
import CartItem from "../CartItem/CartItem";
const CartSection = ({ cartProducts, setCartProducts }) => {
  const checkOut = () => {
    setCartProducts([]);
    toast.success("You are succesfully checkout");
  };
  return (
    <div className="w-11/12 max-w-190 mx-auto mt-10 p-6 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <h2 className="text-[20px] font-bold text-[#1a1f2e] mb-6">
        Your Cart ({cartProducts.length})
      </h2>

      {/* Cart Item */}
      {cartProducts.map((cp) => (
        <CartItem
          cp={cp}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          key={cp.id}
        />
      ))}

      {/* Total Section */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[14px] font-medium text-[#7a849a]">Total:</span>
        <span className="text-[24px] font-bold text-[#1a1f2e] tracking-tight">
          $
          {cartProducts
            .reduce((sum, product) => sum + product.price, 0)
            .toFixed(0)}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={checkOut}
        className="w-full py-3 text-[14px] font-semibold text-white transition-all bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSection;
