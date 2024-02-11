const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    // Add more fields as needed
});

module.exports = mongoose.model('Post', postSchema);
