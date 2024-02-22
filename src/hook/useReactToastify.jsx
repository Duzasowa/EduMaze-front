import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastify = (type, message) => {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "warn") {
    toast.warn(message, toastOptions);
  } else if (type === "info") {
    toast.info(message, toastOptions);
  }
};

export default ReactToastify;
