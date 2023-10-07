interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input className="bg-white text-black px-4 py-2 border" {...props} />;
};
