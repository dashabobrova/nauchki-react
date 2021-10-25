import React from "react";

export const PrimaryButton = ({ children, props }) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};
