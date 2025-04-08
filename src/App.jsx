import { useState } from "react";
import './styles/App.css'
import Card from './components/Card/Card'
import GithubProfileTitle from './components/GithubProfileTitle/GithubProfileTitle'
import Input from './components/Input/Input'
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from "./components/Loader/Loader";
import { fetchGithubProfile } from "./services/githubAPI";

function App() {
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setHasError(false);

    setTimeout(async () => {
      const result = await fetchGithubProfile(username);
  
      if (result.found) {
        setUserData(result.user);
      } else {
        setUserData(null);
        setHasError(true);
      }
  
      setIsLoading(false);
    }, 1000);

  };

  return (
    <>
      <GithubProfileTitle />
      <Input onSearch={handleSearch} />
      {isLoading && <Loader />}
      {hasError && <ErrorMessage />}
      {userData && <Card user={userData} />}
    </>
  )
}

export default App
