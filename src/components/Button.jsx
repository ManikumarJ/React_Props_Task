import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, variant, onClick }) => {
  const style = {
    padding: "10px 20px",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
