import useTitle from "../hooks/useTitle";

const PageNotFound = () => {
  useTitle("PageNotFound");
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <img src="/src/assets/pagenotfound.gif" alt="" />
    </div>
  );
};
export default PageNotFound;
