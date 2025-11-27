import HeroCommon from "../components/HeroCommon";
import ErrorPage from "../components/ErrorPage";

function Error() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2]">
      <HeroCommon title="404 Error" />
      <ErrorPage />
    </div>
  );
}
export default Error;
