import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [serchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User {params.id}</p>;
};

export default UserDetail;
