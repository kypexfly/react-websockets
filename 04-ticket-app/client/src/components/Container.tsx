const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full mx-auto p-2 sm:p-16 bg-white shadow">{children}</div>;
};

export default Container;
