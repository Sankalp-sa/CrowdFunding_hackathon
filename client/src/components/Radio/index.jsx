import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "checked:border-blue_gray-100_01 checked:border checked:bg-white-A700 border-blue_gray-100_01 border border-solid bg-white-A700",
};
const sizes = {
  xs: "h-[60px] w-[336px] text-lg rounded-[10px]",
};

const Radio = React.forwardRef(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
