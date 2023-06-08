import { useContext } from "react";
import AuthContext from "../Auth/authContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
