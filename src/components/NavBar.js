import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";

const NavBar = () => {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-wide px-4 py-2 hover:bg-gray-700 rounded"
          >
            Home
          </Link>
        </div>
        <div className="hidden md:block space-x-4">
          <Link
            to="/about"
            className="text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            Personal Projects
          </Link>
          <Link
            to="/experience"
            className="text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            Experience
          </Link>
        </div>
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
          className="md:hidden text-white p-2 rounded hover:bg-gray-700"
        >
          <ReorderIcon />
        </button>
      </div>

      {expandNavBar && (
        <div className="mt-4 space-y-2 md:hidden">
          <Link
            to="/"
            className="block text-white text-lg font-semibold tracking-wide px-4 py-2 hover:bg-gray-700 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            Personal Projects
          </Link>
          <Link
            to="/experience"
            className="block text-white px-4 py-2 hover:bg-gray-700 rounded"
          >
            Experience
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
