const ButtonForm = (props) => {
  const { type, children } = props;
  return (
    <button
      type={type}
      className="lg:text-xl border-2 border-blue-500 w-full lg:w-40 p-1 lg:py-3 rounded bg-blue-500 text-white hover:opacity-70 font-poppins"
    >
      {children}
    </button>
  );
};

export default ButtonForm;
