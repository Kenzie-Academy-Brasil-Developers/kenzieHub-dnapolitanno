import { forwardRef } from "react";

import { SelectContainer } from "./style";

export const Select = forwardRef(
  ({ id, label, register, errors, children, ...rest }, ref) => {
    return (
      <SelectContainer>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...rest} ref={ref}>
          {children}
        </select>
        {errors ? <p>{errors}</p> : null}
      </SelectContainer>
    );
  }
);
