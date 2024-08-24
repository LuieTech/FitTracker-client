import { useEffect } from "react";
import "./Notification.css";

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Oculta la notificación después de 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
}

export default Notification;
