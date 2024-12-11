const LogoHeader = (props) => {
  const { nameLogo, onClick = () => {}, children } = props;
  return (
    <div className="w-1/6 sm:w-1/3 lg:w-1/6 flex items-center gap-10">
      <div className="hidden lg:block cursor-default font-semibold text-xl">
        <h1>{nameLogo}</h1>
      </div>
      <button type="button" className="lg:hidden" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default LogoHeader;
