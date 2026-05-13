const useGetIcons = () => {
  const closeIcon = (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4799 0.919983L0.919922 17.48"
        stroke="#002B47"
        strokeWidth="1.84"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4799 17.48L0.919922 0.919983"
        stroke="#002B47"
        strokeWidth="1.84"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const miniCloseIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6337 0.234276C14.9462 -0.0780667 15.4532 -0.0781176 15.7656 0.234276C16.0777 0.546625 16.0776 1.05277 15.7656 1.36514L9.1308 7.99892L15.7656 14.6337C16.0779 14.9461 16.0779 15.4531 15.7656 15.7655C15.4532 16.0779 14.9462 16.0779 14.6337 15.7655L7.99896 9.13076L1.36517 15.7655C1.05282 16.0777 0.546688 16.0776 0.234315 15.7655C-0.0781049 15.4531 -0.0781049 14.9461 0.234315 14.6337L6.8681 7.99892L0.234315 1.36514C-0.0781049 1.05272 -0.0781049 0.546696 0.234315 0.234276C0.54674 -0.0780667 1.05278 -0.0781176 1.36517 0.234276L7.99896 6.86807L14.6337 0.234276Z"
        fill="#203B59"
      />
    </svg>
  );

  const greenCheck = (
    <svg
      width="35"
      height="26"
      viewBox="0 0 35 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3999 14L11.1999 23.8L33.5999 1.40002"
        stroke="#00785E"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return { closeIcon, greenCheck, miniCloseIcon };
};

export default useGetIcons;
