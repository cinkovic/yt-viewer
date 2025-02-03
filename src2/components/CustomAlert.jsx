import { useVideo } from '../context/VideoContext';
import '../styles/components/CustomAlert.css';

function CustomAlert() {
  const { alert, closeAlert } = useVideo();

  if (!alert.show) return null;

  return (
    <div className="custom-alert" style={{ display: 'block' }}>
      <div className="alert-content">
        <p>{alert.message}</p>
        <button onClick={closeAlert}>OK</button>
      </div>
    </div>
  );
}

export default CustomAlert; 