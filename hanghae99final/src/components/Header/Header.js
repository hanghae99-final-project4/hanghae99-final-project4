import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <div>
      {" "}
      <SitdownHeader />
    </div>
  );
};
export default Header;
const SitdownHeader = styled.div`
  background-color: #d9d9d9;
  height: 60px;
`;
