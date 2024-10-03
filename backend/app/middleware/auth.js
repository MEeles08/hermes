const jwt = require('jsonwebtoken');

const middlewareObj = {};

// Verify JWT token for API
middlewareObj.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        console.log('No JWT token found');
        return res.status(403).send('A token is required for authentication');
    }
  
    try {
        const tokenWithoutBearer = token.split(" ")[1];
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
        console.log('JWT Token verified');
    } catch (err) {
        console.log('Invalid JWT token found');
        return res.status(401).send('Invalid Token');
    }
    return next();
};

module.exports = middlewareObj;