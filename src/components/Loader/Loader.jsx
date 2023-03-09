import React from "react";
import PropTypes from "prop-types";
import PuffLoader from "react-spinners/PuffLoader";
import { theme } from "constants/theme";
import { Wrapper } from "./Loader.styled";

const override = {
  display: "block",
  margin: `20px auto`,
};

const color = theme.colors.accent;

const Loader = ({ isLoading }) => {
  return (
    <Wrapper>
      <PuffLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
