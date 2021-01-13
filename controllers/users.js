// modules
const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

// exports
module.exports = {
    signup
};

// controller action
async function signup(req, res) {

    console.log(req.body);

    
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json({ token });

    } catch (err) {
      // probably a duplicate email
        console.log(err);

        res.status(400).json(err);
    }
  }

// async function login(req, res) {
//     try {
//         const user = await User.findOne({ email: req.body.emai });
//         if(!user) return res.status(401).json({ err: 'bad credentials' });

//     } catch (error) {
        
//     }
// }

function createJWT(user) {
    console.log(SECRET)
    return jwt.sign({ user }, SECRET, {expiresIn: '24h'})
}