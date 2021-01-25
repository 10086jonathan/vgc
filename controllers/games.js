// const Favorite = require('../models/favorite');
const axios = require('axios');
const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = process.env.API_KEY;

module.exports = {
    getGames
};

async function getGames(req, res) {
    try {
        const { data } = await axios.get(`${BASE_URL}games?key=${API_KEY}`)
        res.json({ data });

    } catch (error) {
        console.log(error);
        // TODO: add erro handling
    }
};