const TitleForm = (props) => {
  const { heading, subHeading } = props;
  return (
    <div className="mb-10">
      <h1 className="text-2xl">{heading}</h1>
      <p className="text-xs">{subHeading}</p>
    </div>
  );
};
export default TitleForm;
