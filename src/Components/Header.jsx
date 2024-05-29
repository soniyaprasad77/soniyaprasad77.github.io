/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white bg-opacity-75 p-4 flex justify-center gap-8 z-10">
      <a href="#home" className="hover:text-blue-500">Home</a>
      <a href="#about" className="hover:text-blue-500">About</a>
      <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
      <a href="#blog" className="hover:text-blue-500">Blogs</a>
      <a href="#footer" className="hover:text-blue-500">Contact</a>
    </div>
  );
};

export default Header;
