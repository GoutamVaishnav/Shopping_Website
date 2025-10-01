"use client";
import { ProductsType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard = ({ product }: { product: ProductsType[number] }) => {
  const [productTypes, setProductTypes] = useState(
    {
      size: product.sizes[0],
      color: product.colors[0],
    }
  )
  const handProductType=({type, value}: {type: 'size' | 'color', value: string})=>{
    setProductTypes((prev) => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden relative cursor-pointer flex flex-col">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="relative w-full flex-1">
        <Image
          src={product.images[productTypes.color]}
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
        <p className="text-sm text-gray-700 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Size & Color */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Size */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Size:</span>
            <select className="border border-gray-300 rounded-md p-1 text-sm" onChange={(e) => handProductType({ type: 'size', value: e.target.value })}>
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
            {/* <select className="border border-gray-300 rounded-md p-1 text-sm">
              {product.colors.map((color) => (
                // <option key={color} value={color}>
                //   {color.toUpperCase()}
                // </option>
                <span></span>
              ))}
            </select> */}
            
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`inline-block w-4 h-4 rounded-full border-1 border-gray-200 ${productTypes.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`} style={{ backgroundColor: color }} onClick={() => handProductType({ type: 'color', value: color })}>
                
                </div>
              ))}
      
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2">
          <span className="text-lg font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>

          <button className="flex items-center gap-0.5 bg-yellow-400 text-black hover:text-white px-4 py-2 rounded-md hover:bg-gray-500 transition text-sm sm:text-base">
           <ShoppingCart/> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
