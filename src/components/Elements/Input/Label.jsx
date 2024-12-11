const Label = (props) => {
  const { label, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="block">
      {label}
    </label>
  );
};

export default Label;
