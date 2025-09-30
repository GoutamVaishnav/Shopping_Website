"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Bell, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 flex justify-between items-center border-b border-gray-300 relative">
      {/* Left (Logo) */}
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-7 h-7 md:w-9 md:h-9"
        />
        <p className="hidden sm:block ml-2 text-md font-semibold tracking-wide">
          Ecommerce
        </p>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <SearchBar />
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md p-2"
        />
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Bell className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <Link href="/login" className="text-gray-700 hover:text-gray-900">
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
          <SearchBar />
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-md p-2"
          />
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <div className="flex space-x-4">
            <Bell className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
