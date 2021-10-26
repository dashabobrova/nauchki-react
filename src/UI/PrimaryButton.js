import React from "react";

export const PrimaryButton = ({ children, disabled, props }) => {
  return (
    <button type="submit" disabled={disabled} {...props}>
      {children}
    </button>
  );
};
