/**
 * Busca um perfil do GitHub com base no nome de usuário ou nome completo.
 *
 * - Primeiro tenta buscar diretamente pelo nome de usuário (`/users/:username`).
 * - Se não encontrar, faz uma busca por nome completo usando a API de search do GitHub (`/search/users?q=...`).
 * - Se encontrar resultados, tenta buscar o perfil completo novamente com a primeira query.
 *
 * @param {string} query - Nome de usuário ou nome completo a ser buscado.
 * @returns {Promise<{ found: boolean, user?: Object }>} Resultado da busca contendo o perfil, se encontrado.
 */
export async function fetchGithubProfile(query) {
  try {
    const response = await fetch(`https://api.github.com/users/${query}`);
  
    if (response.ok) {
      const data = await response.json();
      return { found: true, user: data };
    }

    const searchResponse = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}+in:fullname`);
    const searchData = await searchResponse.json();

    if (searchResponse.ok && searchData.total_count > 0) {
      const userLogin = searchData.items[0].login;
      const fullUserResponse = await fetch(`https://api.github.com/users/${userLogin}`);

      if (fullUserResponse.ok) {
        const fullUserData = await fullUserResponse.json();
        return { found: true, user: fullUserData };
      }
    }

    return { found: false };
  } catch (error) {
    console.error("Erro ao buscar perfil no GitHub:", error);
    return { found: false };
  }
}
  