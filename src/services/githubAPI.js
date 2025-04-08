export async function fetchGithubProfile(query) {
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
}
  