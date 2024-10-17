import { Toaster } from "react-hot-toast";

const toastOption = {
  duration: 3000,
  icon: "😎",
  style: {
    border: "2px solid #151515",
  },
  success: {
    style: {
      background: "#e2ffdb",
      border: "2px solid #61d345",
    },
    icon: undefined,
  },
  error: {
    style: {
      background: "#ffd7d7",
      border: "2px solid #ff4b4b",
    },
    icon: undefined,
  },
  loading: {
    style: {
      border: "2px solid #ccc9c6",
    },
    icon: undefined,
  },
};

export default function Notify() {
  return <Toaster toastOptions={toastOption} />;
}

