const ListMenu = ({ children }) => {
  return (
    <>
      <ul className="font-poppins mt-2 text-sm flex flex-col gap-1">
        {children}
      </ul>
    </>
  );
};

export default ListMenu;
