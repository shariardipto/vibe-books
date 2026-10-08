import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-300">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt="Vibe Book"
              width={120}
              height={60}
              className="brightness-0 invert"
            />

            <p className="max-w-sm text-sm leading-6 text-stone-400">
              Discover books, explore new stories, and build a bookshelf that
              inspires you every day.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition hover:text-white"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  New Releases
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  Popular Books
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm leading-6 text-stone-400">
              Subscribe to get updates about new books and featured collections.
            </p>

            <div className="flex overflow-hidden rounded-full border border-stone-700 bg-stone-900">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-stone-500"
              />

              <button className="bg-white px-5 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-stone-800 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 Vibe Book. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>

            <Link href="#" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;