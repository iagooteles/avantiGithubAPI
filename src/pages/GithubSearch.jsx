import GithubProfileTitle from '../components/GithubProfileTitle/GithubProfileTitle';
import Input from '../components/Input/Input';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";
import { useGithubSearch } from '../hooks/useGithubSearch';

function GithubSearch() {
  const { userData, hasError, isLoading, handleSearch } = useGithubSearch();

  return (
    <>
      <GithubProfileTitle />
      <Input onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && hasError && <ErrorMessage />}
      {!isLoading && userData && <Card user={userData} />}
    </>
  );
}

export default GithubSearch;
