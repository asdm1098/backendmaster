const axios = require('axios');
const { getPopularRepos } = require('../src/controllers/repoController');

jest.mock('axios');

describe('getPopularRepos', () => {
    let req, res;

    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });

    it('debería devolver los 10 repositorios más populares del usuario google', async () => {
        const mockRepos = Array.from({ length: 10 }, (_, i) => ({
            name: `repo${i + 1}`,
            stargazers_count: 100 - i,
            homepage: `http://homepage${i + 1}.com`
        }));

        axios.get.mockResolvedValue({ data: { items: mockRepos } });

        await getPopularRepos(req, res);

        const expectedResponse = mockRepos.map(repo => ({
            name: repo.name,
            stars: repo.stargazers_count,
            homepage: repo.homepage
        }));

        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('debería manejar los errores', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(new Error(errorMessage));

        await getPopularRepos(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Error fetching repos');
    });
});
