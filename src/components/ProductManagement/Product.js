import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = ({ id, category, image, breed, price }) => {
  return (
    <Wrapper>
      <div className="outer-div">
        <div className="image box">
          <figure>
            <img
              className="fill box"
              src={image}
              alt=""
              width={100}
              height={100}
            />
          </figure>
        </div>
        <div className="content">
          <div className="category box">{category}</div>
          <div className="id box">{id}</div>
          <div className="breed box">{breed}</div>
          <div className="price box">{price / 100}</div>
          <div className="btn box">
            <NavLink to={`/EditProduct/${id}`}>
              <button>View / Modify</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  font-size: 1.6rem;

  .outer-div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .box {
    min-width: 10rem;
    display: grid;
    place-content: center;
    min-height: 2rem;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }
`;
export default Product;
