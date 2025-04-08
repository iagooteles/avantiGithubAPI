import { useState } from "react";
import './styles/App.css'
import Card from './components/Card/Card'
import GithubProfileTitle from './components/GithubProfileTitle/GithubProfileTitle'
import Input from './components/Input/Input'

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  };

  return (
    <>
      <GithubProfileTitle />
      <Input onSearch={handleSearch} />
      {userData && <Card user={userData} />}
    </>
  )
}

export default App
