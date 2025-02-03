import VideoInput from './components/VideoInput';
import VideoHistory from './components/VideoHistory';
import VideoPopup from './components/VideoPopup';
import CustomAlert from './components/CustomAlert';
import Container from './components/Layout/Container';
import { VideoProvider } from './context/VideoContext';
import './styles/App.css';

function App() {
  return (
    <VideoProvider>
      <Container>
        <VideoInput />
        <VideoHistory />
      </Container>
      <VideoPopup />
      <CustomAlert />
    </VideoProvider>
  );
}

export default App; 