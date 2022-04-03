export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
};
