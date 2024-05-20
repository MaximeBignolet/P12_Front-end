import NavBar from "../nav/NavBar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Front = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Front;
