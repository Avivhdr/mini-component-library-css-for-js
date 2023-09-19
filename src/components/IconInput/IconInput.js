import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: var(--width);
  border: unset;
`;

const CustomIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles = {
    "--width": width + "px",
  };
  const iconProps = {
    size: size === "small" ? 10.67 : 16,
    strokeWidth: size === "small" ? 1 : 2,
  };
  if (size === "small") {
    styles = {};
  } else if (size === "small") {
    styles = {};
  }

  return (
    <>
      <label for={label} />
      <Wrapper>
        <CustomIcon id={icon} {...iconProps} />
        <Input
          style={{ ...styles }}
          aria-label={label}
          placeholder={"     " + placeholder}
        />
      </Wrapper>
    </>
  );
};

export default IconInput;
