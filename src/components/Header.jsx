import logo from "../assets/castbox_logo-text (1).png";
import React, { useState } from 'react';
import '../style/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const rightLinks = [
    { href: "/", label: "Get the App" },
    { href: "/", label: "For Podcasters" },
    { href: "/", label: "Top Shows" },
    { href: "/", label: "Blog" },
    { href: "/", label: "Listen" },
  ];

  const leftLinks = [
    { href: "/search", label: "Search" },
    { href: "/signin", label: "Sign In" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-section">
          <a href="/">
            <img src={logo} width={150} alt="Castbox Logo" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <div className="main-nav">
            {rightLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
            ))}
          </div>
          <div className="auth-nav">
            {leftLinks.map((link, i) => (
              <a key={i} href={link.href} className={link.label === "Sign In" ? "btn-signin" : ""} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;