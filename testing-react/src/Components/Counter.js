export const Counter = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
