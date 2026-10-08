import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex min-h-20 items-center justify-between px-4 md:px-6 lg:px-8">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/books">
                  Books
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Vibe Book"
              width={110}
              height={55}
              priority
              className="h-auto w-24 md:w-28"
            />
          </Link>
        </div>

        {/* CENTER MENU */}
        <nav className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1 text-base font-medium">

            <li>
              <Link href="/" className="rounded-full px-5">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="rounded-full px-5">
                Books
              </Link>
            </li>

            <li>
              <Link href="/about" className="rounded-full px-5">
                About
              </Link>
            </li>

          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost hidden rounded-full px-6 sm:flex">
            Sign in
          </button>

          <button className="btn btn-neutral rounded-full px-6 shadow-sm">
            Sign up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;