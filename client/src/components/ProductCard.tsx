"use client";
import { ProductsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: ProductsType[number] }) => {
  return (
    <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer flex flex-col">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="relative w-full flex-1">
        <Image
          src={product.images[product.colors[0]]}
          alt={product.name}
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </Link>

      {/* Product Details */}
      <div className="bg-gray-100 p-4 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-2">{product.shortDescription}</p>

        {/* Size & Color */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Size */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Size:</span>
            <select className="border border-gray-300 rounded-md p-1 text-sm">
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Color:</span>
            <select className="border border-gray-300 rounded-md p-1 text-sm">
              {product.colors.map((color) => (
                // <option key={color} value={color}>
                //   {color.toUpperCase()}
                // </option>
                <span></span>
              ))}
            </select>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2">
          <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
