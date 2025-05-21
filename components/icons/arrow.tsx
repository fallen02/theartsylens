export const ArrowRignt = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.43 5.92969L20.5 11.9997L14.43 18.0697" />
      <path d="M11.01 12H20.33" />
      <path d="M3.5 12H6.97" />
    </svg>
  );
};
