import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectStyled = styled.select`
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  width: var(--width);
  appearance: none;
  color: inherit;
  &:focus {
    outline-offset: 2px;
    outline: 2px solid #4374cb;
  }
`;

const Wrapper = styled.div`
  width: min-content;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;
const ChevronIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px; 
` 
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const selectLengthInPx = 60 + displayedValue.length * 6;
  return (
    <Wrapper>
      <SelectStyled
        aria-label={label}
        value={value}
        onChange={onChange}
        style={{ "--width": selectLengthInPx + "px" }}
      >
        {children}
      </SelectStyled>
      <ChevronIcon id="chevron-down" size={20} strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
