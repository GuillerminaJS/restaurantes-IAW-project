import Comments from '../models/Comments.js';

export const showAllComments= async (req, res) => {
    try {
        const comments = await Comments.find({}).populate('user').populate('restaurant');
        res.json(comments);
    } catch (error) {
        console.log(error);
    }
};

export const searchCommentsByName = async (req, res) => {
    try {
        const { query } = req.params;
        const documents = await Comments.find({ nombre: new RegExp(query, 'i') })
            .populate({
                path: 'user',
                model: 'Users'
            });
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const newComment = async (req, res) => {
    const comment = new Comments(req.body);
    try {
        await comment.save();
        res.json({ message : 'New comment was added' + comment._id});
    } catch (error) {
        res.send(error);
    }
};

export const updateComment= async (req, res) => {
    try {
        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true};
        const comment = await Comments.findOneAndUpdate(filter, update, options);
        res.json(comment);
    } catch (error) {
        res.send(error);
    }
};

export const deleteCommment = async (req, res) => {
    try {
        await Comments.findByIdAndDelete({ _id : req.params.idComment });
        res.json({message : 'Type was deleted' + req.params.idComment});
    } catch (error) {
        console.log(error);
    }
};