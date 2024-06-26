import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark"
        style={{ zIndex: 1 }}
      >
        <div className="container-fluid">
          <h2 className="navbar-brand" style={{ color: "white" }}>
            Way to React Technologies
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
