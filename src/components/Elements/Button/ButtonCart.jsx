const ButtonCart = (props) => {
  const { onClick = () => {}, type, text } = props;
  return (
    <button
      type={type}
      className="rounded border-2 border-blue-600 bg-blue-600 hover:opacity-70 p-1 text-xs text-white "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonCart;
