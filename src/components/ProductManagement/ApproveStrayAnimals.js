import React from "react";
import styled from "styled-components";
import { useProductContext } from "../../contexts/ProductContext";
import { NavLink } from "react-router-dom";

const ApproveStrayAnimals = () => {
  const { reqRegisterStray } = useProductContext();
  return (
    <Wrapper>
      <div className="main">
        {reqRegisterStray.map((elem) => {
          const { added_by, stray_animal_info, _id } = elem;
          return (
            <div className="row" key={_id}>
              <div className="rows">{added_by.name}</div>
              <div className="animal">{stray_animal_info.title}</div>
              <NavLink to={`/ApproveStrayAnimal/${_id}`}>
                <button>Accept / Reject</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row {
    display: flex;
    gap: 2rem;
  }
`;
export default ApproveStrayAnimals;
