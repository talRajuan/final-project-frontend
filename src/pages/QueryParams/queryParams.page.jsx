import { useLocation } from "react-router-dom";

const QueryParamsPage = () => {
  const location = useLocation();
  console.log("location", location);
  const qParams = new URLSearchParams(location.search);
  return (
    <div>
      <h2>What im looking for?</h2>
      <h2>{qParams.get("q")}</h2>
    </div>
  );
};
export default QueryParamsPage;
