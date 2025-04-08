import { useState } from "react";
import './styles/App.css'
import Card from './components/Card/Card'
import GithubProfileTitle from './components/GithubProfileTitle/GithubProfileTitle'
import Input from './components/Input/Input'
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);

  const handleSearch = async (user) => {
    try {
      setHasError(false);
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
      setUserData(null);
      setHasError(true);
    }
  };

  return (
    <>
      <GithubProfileTitle />
      <Input onSearch={handleSearch} />
      {hasError && <ErrorMessage />}
      {userData && <Card user={userData} />}
    </>
  )
}

export default App
