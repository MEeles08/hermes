const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({App: 'matteeles.co.uk'}, process.env.JWT_SECRET, { expiresIn: '1h' });
};
// Generate JWT token
exports.generate = (req, res) => {
    const token = generateToken();
    res.send({token});
};