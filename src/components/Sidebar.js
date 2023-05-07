import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { SiGoogletagmanager } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiCurrencyRupee, HiDocumentReport } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";

const Sidebar = ({ isExpanded, setExpanded }) => {
  return (
    <Wrapper>
      <div className="container1">
        <div
          className={
            isExpanded
              ? "expanded sidebar-nav-btn box-1"
              : "sidebar-nav-btn box-1"
          }
        >
          <div className="top-nav">
            <div className="admin-text">ADMIN</div>{" "}
            <div className="menu-btn">
              <GiHamburgerMenu
                className="menu-btn"
                onClick={() => {
                  setExpanded(!isExpanded);
                }}
              />
            </div>
          </div>
        </div>
        <div className="box-2">rgrdf</div>
        <div
          className={
            isExpanded ? "expanded nav-links box-3" : "nav-links box-3"
          }
        >
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <div className="navlinks">
                    <div className="icon">
                      <AiFillHome />
                    </div>
                    <div className="text">Home</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/OrdersPage">
                  <div className="navlinks">
                    <div className="icon">
                      <HiCurrencyRupee />
                    </div>
                    <div className="text">Orders</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/PerformancePage">
                  <div className="navlinks">
                    <div className="icon">
                      <HiDocumentReport />
                    </div>
                    <div className="text">Performance</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AdoptionPage">
                  <div className="navlinks">
                    <div className="icon">
                      <MdOutlinePets />
                    </div>
                    <div className="text">Adoptions</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manageproducts">
                  <div className="navlinks">
                    <div className="icon">
                      <SiGoogletagmanager />
                    </div>
                    <div className="text">Manage Products</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/customersPage">
                  <div className="navlinks">
                    <div className="icon">
                      <BsPersonLinesFill />
                    </div>
                    <div className="text">Customers</div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="box-4">
          <MdLogout />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* position: relative; */
  /* .sidebar-nav-btn {
    position: absolute;
    right: 0.2rem;
    padding: 0.2rem;
    font-size: 2.5rem;

    .menu-btn {
      font-size: 3.2rem;
    }

    .admin-text {
      font-size: 3.2rem;
      display: none;
    }
  } */
  /* .top-nav {
    display: flex;
    gap: 0.5rem;
  } */

  .container1 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    font-size: 2.4rem;
    flex-basis: 100%;
  }

  .box-1 {
    display: flex;
    flex-direction: row;
    /* flex-grow: 1; */
    justify-content: end;
    /* flex: 0 1 auto; */

    .admin-text {
      display: none;
    }

    .top-nav {
      display: flex;
      font-size: 3.2rem;
    }
  }

  .box-2 {
    /* height: fit-content; */
    /* flex: 0 1 auto; */
  }

  .box-3 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: purple;
    font-size: 3.2rem;

    nav ul {
      list-style-type: none;
    }

    .navlinks {
      display: flex;
      gap: 0.5rem;
    }

    .text {
      display: none;
    }
  }

  .box-4 {
    display: grid;
    place-content: center;
    font-size: 3.2rem;
    padding: 1rem;
  }

  .sidebar-nav-btn.expanded {
    .admin-text {
      display: inline-block;
    }
  }

  .expanded.nav-links {
    .text {
      display: inline-block;
    }
    font-size: 2.4rem;
  }

  nav {
    display: flex;
    flex-grow: 1;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      li {
        color: #fff;
      }
    }
  }
  /*
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-grow: 1;
    /* min-height: 100vh; */
  /* ul {
      list-style-type: none;
    }
    ul li {
      text-decoration: none;
      list-style-type: none;

      .text {
        list-style: none;
        padding: 1rem;
        font-size: 2rem;
        display: none;
      }
    }
  }

  .navlinks {
    display: flex;
    gap: 0.5rem;
  }

  .expanded.nav-links {
    nav ul li .navlinks .text {
      display: inline-block;
    }
  }

  .navlinks .icon {
    font-size: 3.2rem;
  } */

  a:link {
    text-decoration: none;
    color: var(--white);
  }
  a:visited {
    color: var(--white);
  }
`;

export default Sidebar;
