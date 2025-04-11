import { useState } from "react";
import { fetchGithubProfile } from "../services/githubAPI";
import { showWarningToast } from "../services/toastifyService";

/**
 * Hook customizado que gerencia a busca por perfis do GitHub com base em um nome de usuário.
 *
 * Realiza a requisição à API do GitHub, trata erros, controla loading e mensagens de aviso.
 *
 * @returns {Object} Um objeto com os seguintes valores:
 *   - userData: os dados do usuário encontrados (ou null)
 *   - hasError: booleano indicando se houve erro na busca
 *   - isLoading: booleano indicando se a requisição está em andamento
 *   - handleSearch: função que executa a busca a partir de um username
 */
export const useGithubSearch = () => {
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (username) => {
    if (!username.trim()) {
      showWarningToast("Por favor, insira um nome de usuário!");
      return;
    }
    
    setIsLoading(true);
    setHasError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const result = await fetchGithubProfile(username);
  
      if (result.found) {
        setUserData(result.user);
      } else {
        setUserData(null);
        setHasError(true);
      }
    } catch (error) {
      console.error(error);
      setUserData(null);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    userData,
    hasError,
    isLoading,
    handleSearch,
  };
};
