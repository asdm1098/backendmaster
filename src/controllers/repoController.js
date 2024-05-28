const axios = require('axios');

const getPopularRepos = async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
            q: 'user:google',
            sort: 'stars',
            per_page: 10
        }
        });

        const repos = response.data.items;
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        const topRepos = repos.slice(0, 10).map(repo => ({
            name: repo.name,
            stars: repo.stargazers_count,
            homepage: repo.homepage
        }));

        res.json(topRepos);
    } catch (error) {
        console.error('Error fetching repos:', error.message);
        res.status(500).send('Error fetching repos');
    }
};

module.exports = { getPopularRepos };
