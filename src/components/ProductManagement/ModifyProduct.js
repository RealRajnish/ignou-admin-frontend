import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import Product from "./Product";

const ModifyProduct = () => {
  const { products } = useProductContext();
  return (
    <Wrapper>
      <div className="main">
        {products.map((elem) => {
          const { id, category, image, breed, price } = elem;
          return (
            <Product
              id={id}
              category={category}
              image={image}
              breed={breed}
              price={price}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default ModifyProduct;
