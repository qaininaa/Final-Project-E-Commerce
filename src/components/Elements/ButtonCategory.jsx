const ButtonCategory = (props) => {
  const {
    titleCategory,
    children,
    classButtonCat,
    classTitleCat,
    onClick = () => {},
  } = props;
  return (
    <button type="button" className={classButtonCat} onClick={onClick}>
      {children}
      <p className={classTitleCat}>{titleCategory}</p>
    </button>
  );
};

export default ButtonCategory;
