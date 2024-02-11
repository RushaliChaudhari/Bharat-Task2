const Post = require('../models/postModel');

// Controller for handling requests related to blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        console.error('Error fetching post:', err);
        res.status(500).send('Internal Server Error');
    }
};
