import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  z-index: 6;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(6em);
  background-color: rgba(29, 27, 27, 0.4);
`;


const Logo = styled.p`
  color: red;
  font-weight: 900;
  font-size: 1.5em;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/home">
        <Logo>FILMANIA</Logo>
      </Link>
    </HeaderContainer>
  );

}


