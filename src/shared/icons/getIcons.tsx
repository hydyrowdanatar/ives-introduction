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

  return { closeIcon, greenCheck };
};

export default useGetIcons;
