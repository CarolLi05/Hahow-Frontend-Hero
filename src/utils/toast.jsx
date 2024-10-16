import toast from "react-hot-toast";

const notifyPosition = "top-right";

const notify = (message, type) => {
  if (type === 'success') {
    toast.success(message, { position: notifyPosition });
  }
  if (type === 'loading') {
    toast.loading(message, { position: notifyPosition });
  }
  if (type === 'error') {
    toast.error(message, { position: notifyPosition });
  }
}

export { notify };