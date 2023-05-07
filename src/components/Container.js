import React from "react";
import styled from "styled-components";
import Form from "./ProductManagement/Form";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "../pages/Home";
import ManageProducts from "../pages/ManageProducts";
import CustomersPage from "../pages/CustomersPage";
import DeleteProduct from "./ProductManagement/DeleteProduct";
import ModifyProduct from "./ProductManagement/ModifyProduct";
import AddStrayAnimals from "./ProductManagement/AddStrayAnimals";
import ApproveStrayAnimals from "./ProductManagement/ApproveStrayAnimals";
import AdoptionPage from "../pages/AdoptionPage";
import PerformancePage from "../pages/PerformancePage";
import OrdersPage from "../pages/OrdersPage";

const Container = () => {
  return (
    <Wrapper>
      <div className="content">
        <Routes>
          {/* Pages of Container through Sidebar  */}
          {/* Routes Starts  */}
          <Route path="/" element={<Home />} />
          <Route path="/OrdersPage" element={<OrdersPage />} />
          <Route path="/PerformancePage" element={<PerformancePage />} />
          <Route path="/AdoptionPage" element={<AdoptionPage />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
          <Route path="/customersPage" element={<CustomersPage />} />
          {/* Routes Ends  */}
          <Route path="/form" element={<Form />} />
          <Route path="/AddProducts" element={<Form />} />
          <Route path="/DeleteProducts" element={<DeleteProduct />} />
          <Route path="/ModifyProducts" element={<ModifyProduct />} />
          <Route path="/AddStrayAnimals" element={<AddStrayAnimals />} />
          <Route
            path="/ApproveStrayAnimals"
            element={<ApproveStrayAnimals />}
          />
        </Routes>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: grid;
  place-content: center; */

  height: 100vh;
  overflow-y: scroll;

  /* for scrollbar  customazation start */
  /* scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  section::-webkit-scrollbar {
    width: 1.5rem;
  }

  section::-webkit-scrollbar-track {
    background-color: rgb(24 24 29);
  }

  section::-webkit-scrollbar-thumb {
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  } */

  /* scrollbar customzation end  */

  /* place-items: center; */

  /* margin-top: 2rem; */
`;
export default Container;
