const express = require('express');
const { getPopularRepos } = require('../controllers/repoController');

const router = express.Router();

router.get('/repos', getPopularRepos);

module.exports = router;