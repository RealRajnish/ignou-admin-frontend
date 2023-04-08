import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Sidebar = ({ isExpanded, setExpanded }) => {
  return (
    <Wrapper>
      <div
        className="sidebar-nav-btn"
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        ADMIN
        <GiHamburgerMenu />
      </div>
      <nav>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .sidebar-nav-btn {
    position: absolute;
    right: 0.2rem;
    padding: 0.2rem;
    font-size: 2.5rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-grow: 1;
    min-height: 100vh;
    li {
      list-style: none;
      padding: 1rem;
      font-size: 2rem;
    }
  }
`;

export default Sidebar;
