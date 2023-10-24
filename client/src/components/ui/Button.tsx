import { FC, ReactNode } from "react";

interface IProps {
  type?: string;
  children: ReactNode;
}

const Button: FC<IProps> = ({ type = "primary", children }) => {
  const className =
    type === "secondary"
      ? "bg-white hover:bg-secondary text-secondary hover:text-white"
      : "bg-primary text-white hover:text-secondary hover:bg-transparent hover:border-secondary";

  return (
    <button
      className={`px-9 py-4 text-base font-medium transition-all border border-transparent ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
