import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-lg font-bold text-white">TRENDLAMA.</span>
          </div>
          <p className="mt-4 text-sm">
            © 2025 Trendlama. <br />
            All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-white">
              Homepage
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/products" className="hover:text-white">
              All Products
            </Link>
            <Link href="/products/new" className="hover:text-white">
              New Arrivals
            </Link>
            <Link href="/products/best-sellers" className="hover:text-white">
              Best Sellers
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-white">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        Made with ❤️ by Trendlama Team
      </div>
    </footer>
  );
};

export default Footer;
