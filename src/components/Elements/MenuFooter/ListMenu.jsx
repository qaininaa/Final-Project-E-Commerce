const ListMenu = ({ children }) => {
  return (
    <>
      <ul className="mt-2 text-sm flex flex-col gap-1">{children}</ul>
    </>
  );
};

export default ListMenu;
