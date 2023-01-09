import Users from '../models/Users.js';

export const showAllUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

export const newUser = async (req, res) => {
    const user = new Users(req.body);
    try {
        await user.save();
        res.json({ message : 'New user was added' });
    } catch (error) {
        res.send(error);
    }
};

export const updateUser= async (req, res) => {
    try {
        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true};
        const user = await Users.findOneAndUpdate(filter, update, options);
        res.json(user);
    } catch (error) {
        res.send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        await Users.findByIdAndDelete({ _id : req.params.idUser });
        res.json({message : 'User was deleted' + req.params.idUser});
    } catch (error) {
        console.log(error);
    }
};