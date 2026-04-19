const EmptyCart = () => {
  return (
    <div className="w-full max-w-190 mx-auto mt-10 mb-10 p-6 md:p-8 grid place-items-center bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <img
        src="./assets/images/empty-cart.png"
        alt="Empty Cart"
        className="w-25"
      />
      <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
    </div>
  );
};

export default EmptyCart;
