import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn("bg-slate-500 text-white px-4 py-2 rounded-md", className)} {...props}>
      {children}
    </button>
  );
};
