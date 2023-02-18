/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

const ProgressBar = ({ value, size }) => {
  let wrapperStyles = {};
  let barStyles = {
    "--width": value + "%",
  };
  if (size === "small") {
    wrapperStyles = {
      "--height": 8 + "px",
      "--radius": 4 + "px",
    };
  }
  if (size === "medium") {
    wrapperStyles = {
      "--height": 12 + "px",
      "--radius": 4 + "px",
    };
  }
  if (size === "large") {
    wrapperStyles = {
      "--height": 24 + "px",
      "--radius": 8 + "px",
      "--padding": 4 + "px",
    };
    barStyles = {
      ...barStyles,
      "--height": 16 + "px",
    };
  }

  return (
    <Wrapper style={wrapperStyles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={barStyles}>

        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
