import useTitle from "../hooks/useTitle";

const portfolio = () => {
  useTitle("Portfolio");
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Portfolio</h1>
    </div>
  );
};
export default portfolio;
