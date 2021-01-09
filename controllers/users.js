// modules
const User = require('../models/user');
// const SECRET = process.env.SECRET;
// const jwt = require('jsonwebtoken');

// exports
module.exports = {
    signup,
};

// controller action
async function signup(req, res) {
    try {
        const user = await User.create(req.body);

        // const token = createJWT(user);

        res.json({ user });

    } catch (error) {
        res.status(400).json({ msg: 'bad request' });
    }
}