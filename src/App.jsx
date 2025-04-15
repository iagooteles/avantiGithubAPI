import './styles/App.css';
import { ToastContainer } from "react-toastify";
import AppBackground from './components/AppBackground/AppBackground';
import GithubSearch from './pages/GithubSearch';

function App() {
  return (
    <div className="app-wrapper">
      <AppBackground />
      <div className="app-container">
        <GithubSearch />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
