import React from "react";
import styled from "styled-components";

function Section({ Icon, title, color, selected }) {
  const SectionContainer = styled.div`
    border-bottom: 3px solid ${color};
    color: ${selected ? color : "gray"};
    display: flex;
    align-items: center;
    background-color: ${selected && "whitesmoke"};
    border-width: ${selected ? "3px !important" : "0px !important"};
    border-bottom-width: 2px;
    padding: 15px;
    min-width: 200px;
    cursor: pointer;

    > h4 {
      font-size: 14px;
      margin-left: 15px;
    }

    &:hover {
      background-color: whitesmoke;
      border-width: 3px !important;
    }
  `;

  return (
    <SectionContainer>
      <Icon />
      <h4>{title}</h4>
    </SectionContainer>
  );
}

export default Section;
