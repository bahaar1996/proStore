"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 border-b">
      <Link href="/">خانه</Link>
      <Link href="/products">محصولات</Link>
    </nav>
  );
};

export default Navbar;
