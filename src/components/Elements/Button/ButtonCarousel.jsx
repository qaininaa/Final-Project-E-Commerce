const ButtonCarousel = (props) => {
  const { classNameButton, classNameIconButton } = props;
  return (
    <>
      <button type="button" className={` ${classNameButton} left-2`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#000"
          className={classNameIconButton}
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>

      <button type="button" className={` ${classNameButton} right-2`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
          className={classNameIconButton}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </>
  );
};

export default ButtonCarousel;
