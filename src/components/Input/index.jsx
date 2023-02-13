import { forwardRef } from "react";

import { InputContainer } from "../../style/input";

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
  return (
    <InputContainer>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input id={label.toLowerCase()} ref={ref} {...rest} />
      {errors ? <p>{errors}</p> : null}
    </InputContainer>
  );
});
