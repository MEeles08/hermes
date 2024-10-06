const { Sanity } = require('../utils/sanity');

// Retrieve all Posts from Sanity.io.
exports.findAll = async (req, res) => {
    try {
        const query = '*[_type == "post"]';
        const posts = await Sanity.client.fetch(query);
        res.json(posts);
    } 
    catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve posts from Sanity' })
    }
};

// Find a single Post with slug from Sanity.io
exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const query = `*[_type == "post" && slug.current == $id][0]`;
        const posts = await Sanity.client.fetch(query, { id });
        res.json(posts);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};
