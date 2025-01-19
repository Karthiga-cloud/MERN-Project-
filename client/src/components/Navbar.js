import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="Navbar">
        MAMMY'S PIZZA
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link" href="home">
              Login 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cart">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
