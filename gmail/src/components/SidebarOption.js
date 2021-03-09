import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, number, selected }) {
  const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: gray;

    > h3 {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      font-weight: 400;
    }

    > .MuiSvgIcon-root {
      padding: 5px;
    }

    > p {
      display: ${selected ? "inline" : "none"};
      font-weight: 300;
    }

    &:hover {
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }

    &:hover > p {
      display: inline;
    }
  `;

  const SidebarOptionActive = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: gray;

    > h3 {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      font-weight: 400;
    }

    > .MuiSvgIcon-root {
      padding: 5px;
    }

    > p {
      display: ${selected ? "inline" : "none"};
      font-weight: 300;
    }

    &:hover {
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }

    &:hover > p {
      display: inline;
    }

    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
  `;

  return (
    <>
      {selected ? (
        <SidebarOptionActive>
          {<Icon />}
          <h3>{title}</h3>
          <p>{number}</p>
        </SidebarOptionActive>
      ) : (
        <SidebarOptionContainer>
          {<Icon />}
          <h3>{title}</h3>
          <p>{number}</p>
        </SidebarOptionContainer>
      )}
    </>
  );
}

export default SidebarOption;
