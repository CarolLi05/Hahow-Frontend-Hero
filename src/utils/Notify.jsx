import { Toaster } from "react-hot-toast";

const toastOption = {
  success: {
    style: {
      background: "#e2ffdb",
      border: "2px solid #61d345",
    },
  },
  error: {
    style: {
      background: "#ffd7d7",
      border: "2px solid #ff4b4b",
    },
  },
  loading: {
    style: {
      border: "2px solid #ccc9c6",
    },
  },
};

export default function Notify() {
  return <Toaster toastOptions={toastOption} />;
}

