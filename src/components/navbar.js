/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="">
      <nav class="flex justify-between items-center bg-transparent text-gray py-4 px-6 mbl:justify-center">
        <div class="text-lg font-bold">
          <Link to="/" class="hover:text-gray-400  mbl:hidden cursor-pointer font-bold">
            {`</>`}
          </Link>
        </div>
        <ul class="flex mbl:gap-16">
          <li class="ml-6">
            <Link to="/" class="hover:text-gray-400 font-semibold">
              Home
            </Link>
          </li>
          <li class="ml-6">
            <a href="#project" class="hover:text-gray-400 font-semibold">
              Projects
            </a>
          </li>
          <li class="ml-6">
            <Link to="/contact" class="hover:text-gray-400 font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
