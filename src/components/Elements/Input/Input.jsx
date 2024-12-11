import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, id, placeholder, onChange = () => {} } = props;
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 focus:outline-none border-b-2 border-slate-400 focus:border-blue-500"
    />
  );
});

export default Input;
