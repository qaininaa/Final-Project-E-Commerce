import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { name, label, type, placeholder, onChange } = props;
  return (
    <div className="mt-3">
      <Label htmlFor={name} label={label} />
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
