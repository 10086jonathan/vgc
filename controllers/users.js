// modules
const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

// exports
module.exports = {
    signup,
    login
};

// controller action
async function signup(req, res) {
    
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json({ token });

    } catch (err) {

        res.status(400).json({ msg: 'bad request' });
    }
  }

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });

        if(!user) return res.status(401).json({ err: 'bad credentials' });

        user.comparePassword(req.body.password, (err, isMatch) => {
          if(isMatch) {
            const token = createJWT(user);
            res.json({ token });
          } else {
            return res.status(401).json({ err: 'bad request' });
          }
        })

    } catch (error) {
      return res.status(400).json({ err: 'bad credentials' });
    }
}

function createJWT(user) {
    console.log(process.env.SECRET)
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'})
}