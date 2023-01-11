import Types from '../models/Types.js';

export const showAllTypes = async (req, res) => {
    try {
        const types = await Types.find({});
        res.json(types);
    } catch (error) {
        console.log(error);
    }
};

export const newType = async (req, res) => {
    const type = new Types(req.body);
    try {
        await type.save();
        res.json({ message : 'New type was added' });
    } catch (error) {
        res.send(error);
    }
};

export const updateType= async (req, res) => {
    try {
        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true};
        const type = await Types.findOneAndUpdate(filter, update, options);
        res.json(type);
    } catch (error) {
        res.send(error);
    }
};

export const deleteType = async (req, res) => {
    try {
        await Types.findByIdAndDelete({ _id : req.params.idType });
        res.json({message : 'Type was deleted' + req.params.idType});
    } catch (error) {
        console.log(error);
    }
};