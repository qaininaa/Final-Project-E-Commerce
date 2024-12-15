const TitleMenu = ({ title, size }) => {
  return (
    <>
      <h1 className={`text-lg ${size}`}>{title}</h1>
    </>
  );
};
export default TitleMenu;
