import { useNavigate } from "react-router-dom";

const useOnCancel = () => {
  const navigate = useNavigate();

  function onCancel() {
    navigate("/products");
  }

  return onCancel;
};

export default useOnCancel;
