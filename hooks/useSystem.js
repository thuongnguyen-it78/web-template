import { useContext } from "react";
import { SystemContext } from "../context/SystemContext";

const useSystem = () => {
  return useContext(SystemContext);
};

export default useSystem;
