import ListMenu from "./ListMenu";
import TitleMenu from "./TitleMenu";

const MenuFooter = (props) => {
  const { title, children, size } = props;
  return (
    <div className="w-fit">
      <TitleMenu title={title} size={size} />
      <ListMenu>{children}</ListMenu>
    </div>
  );
};

export default MenuFooter;
