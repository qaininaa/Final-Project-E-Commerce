const HeadingChose = (props) => {
  const { heading, subHeading } = props;
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <svg
          width="20"
          height="40"
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="40" rx="4" fill="#DB4444" />
        </svg>
        <h2 className="text-sm font-semibold text-[#DB4444]">{heading}</h2>
      </div>
      <h3 className="mt-1 text-lg font-semibold">{subHeading}</h3>
    </div>
  );
};

export default HeadingChose;
