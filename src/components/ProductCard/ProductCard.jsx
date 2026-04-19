import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdCheck } from "react-icons/md";

const ProductCard = ({ pr, cartProducts, setCartProducts }) => {
  const isAddedOnCart = cartProducts.some((cr) => cr.id === pr.id);

  const [isAdded, setIsAdded] = useState(isAddedOnCart);

  const handleCart = (pr) => {
    if (!isAdded) {
      setIsAdded(true);
    } else return;
    setCartProducts([...cartProducts, pr]);
    toast.success(`${pr.name} is added to cart`);
  };
  return (
    <>
      <div className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] font-sans">
        {/* Badge */}
        {pr.tag === "best seller" && (
          <div className="absolute top-5 right-5 px-3 py-1 text-[11px] font-semibold text-[#c78531] bg-[#fdf3e1] rounded-full">
            Best Seller
          </div>
        )}
        {pr.tag === "new" && (
          <div className="absolute top-5 right-5 px-3 py-1 text-[11px] font-semibold text-[#0A883E] bg-[#DBFCE7] rounded-full">
            New
          </div>
        )}
        {pr.tag === "popular" && (
          <div className="absolute top-5 right-5 px-3 py-1 text-[11px] font-semibold text-[#4F39F6] bg-[#E1E7FF] rounded-full">
            Popular
          </div>
        )}

        {/* Icon */}
        <div className="flex items-center justify-center w-15 h-15 bg-white border border-gray-100 rounded-full shadow-sm mb-5">
          <img
            src={`./assets/products/${pr.icon}.png`}
            alt={pr.icon}
            className="w-10 "
          />
        </div>

        {/* Title & Description */}
        <h3 className="text-[20px] font-bold text-[#1a1f2e] mb-2.5">
          {pr.name}
        </h3>
        <p className="text-[13px] leading-[1.6] text-[#7a849a] mb-6">
          {pr.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-[32px] font-extrabold text-[#1a1f2e] tracking-tight">
            ${pr.price}
          </span>
          <span className="text-[14px] font-medium text-[#929aab]">/Mo</span>
        </div>

        {/* Features List */}
        <ul className="flex flex-col gap-1 mb-8">
          {pr.features.map((feature) => (
            <li
              className="flex items-center gap-1 text-[13px] font-medium text-[#5c657a]"
              key={feature}
            >
              <MdCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3 text-[14px] font-semibold text-white transition-all rounded-full scale-[0.98] ${
            !isAdded
              ? "cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
              : "bg-green-600"
          }`}
          onClick={() => handleCart(pr)}
        >
          <span className="flex items-center gap-1 justify-center">
            {isAdded ? (
              <>
                <MdCheck className="text-white" /> Added to Cart
              </>
            ) : (
              "Buy Now"
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
