import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Login", link: "/login" },
    { title: "Register", link: "/register" },
    { title: "Create Notes", link: "/note/create" },
    { title: "All Notes", link: "/note/all" },
  ];

  return (
    <>
      <nav className="navbar" style={{ marginBottom: 10 }}>
        <div className="logo">MyApp</div>

        <ul className="nav-links">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          height: 70px;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }

        .nav-links li a {
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links li a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -5px;
          background-color: #ffd700;
          transition: width 0.3s ease;
        }

        .nav-links li a:hover {
          color: #ffd700;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-links {
            gap: 15px;
          }

          .nav-links li a {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;