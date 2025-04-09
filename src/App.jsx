import './styles/App.css';
import Card from './components/Card/Card';
import GithubProfileTitle from './components/GithubProfileTitle/GithubProfileTitle';
import Input from './components/Input/Input';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { useGithubSearch } from './hooks/useGithubSearch';

function App() {
  const { userData, hasError, isLoading, handleSearch } = useGithubSearch();

  return (
    <>
      <ToastContainer />
      <GithubProfileTitle />
      <Input onSearch={handleSearch} />
      {isLoading && <Loader />}
      {hasError && <ErrorMessage />}
      {userData && <Card user={userData} />}
    </>
  );
}

export default App;
