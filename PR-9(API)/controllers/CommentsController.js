const CommentModel = require('../models/CommentModel');
const BlogModel = require('../models/BlogModel');

const addComment = async (req, res) => {
    try {
        const { comment, blogid } = req.body;

        if (!comment || !blogid) {
            return res.status(400).send({
                success: false,
                message: "Comment and blog ID are required",
            });
        }

        const blog = await BlogModel.findById(blogid);
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found",
            });
        }

        const newComment = await CommentModel.create({
            userid: req.user._id, 
            blogid: blogid,
            comment: comment,
        });

        return res.status(200).send({
            success: true,
            message: "Comment successfully created",
            comment: newComment,
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message || "Server error",
        });
    }
};

module.exports = addComment;
