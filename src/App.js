import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isExpanded, setExpanded] = useState("false");

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <div
            className={isExpanded ? "container expanded" : "container collapse"}
          >
            <div className={isExpanded ? "header expanded" : "header collapse"}>
              <Sidebar isExpanded={isExpanded} setExpanded={setExpanded} />
            </div>
            <div className="main">
              <Routes>
                <Route path="/" element={<Container />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.section`
  .container {
    display: grid;
  }
  .expanded {
    grid-template-columns: 1fr 2fr;
  }
  .collapse {
    grid-template-columns: 1fr 3fr;
  }
  .header {
    min-height: 100vh;
  }
  .header.expanded {
    background-color: papayawhip;
  }

  .header.collapse {
    background-color: aqua;
  }

  .main {
    background: linear-gradient(rgb(39, 132, 154), rgb(228, 95, 255));
  }
`;

export default App;
