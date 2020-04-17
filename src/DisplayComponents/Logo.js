import React from "react";
import styled from "styled-components";
import logo from "../img/nasa-logo.jfif";

const NasaLogo = styled.img`
  padding-top: 2em;  
  width: 50em;
  height: 10em;
`;

const Logo = () => {
  return (
      <NasaLogo className="logo" src={logo} alt="nasa logo" />
  );
};

export default Logo;