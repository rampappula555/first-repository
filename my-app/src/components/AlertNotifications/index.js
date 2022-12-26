import "./index.css";
import Alert from "../Alert";
const AlertNotifications = () => {
  return (
    <div>
      <h1>Alert Notifications</h1>

      <Alert>
        <h3>SUCCESS</h3>
        <p>you can access all the files inn the folder</p>
        <button>X</button>
      </Alert>
      <Alert>
        <h3>SUCCESS</h3>
        <p>you can access all the files inn the folder</p>
        <button>X</button>
      </Alert>
      <Alert>
        <h3>SUCCESS</h3>
        <p>you can access all the files inn the folder</p>
        <button>X</button>
      </Alert>
    </div>
  );
};
export default AlertNotifications;
