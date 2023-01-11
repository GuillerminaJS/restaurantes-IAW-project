import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const registerUser = async (req, res) => {
    try {
        const { username, surnames, role, language, password } = req.body;

        if (!(username && surnames && role && language && password)){
            res.status(400).send("All input is required");
        }

        const oldUser = await Users.findOne({ email });

        if (oldUser) {
            return res.status(409).SEND("This user already exists, please try again");
        }
        
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            username,
            surnames,
            role,
            language,
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { user_id: user._id, surnames },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;

        res.status(201).jsomn(user);
    } catch (err) {
        console.log(err);
    }
}

export const loginUser = async (req, res) => {

    try {
        const { username, password } = req.body;

        if (!(username, password)) {
            res.status(400).send("All inputs are required");
        }
        const user = await Users.findOne({ username });

        if (user.password != password) {
            res.status(400).json({"message":"password incorrect"});
        }

        res.status(200).json(user); // user data

        // if (user && (await bcrypt.compare(password, user.password))) {
        //     // Create token
        //     const token = jwt.sign(
        //         { user_id: user._id, username },
        //         process.env.TOKEN_KEY,
        //         {
        //             expiresIn: "2h",
        //         }
        //     );

        //     user.token = token; // save user token
        //     res.status(200).json(user); // user data
        // }else{
        //     res.status(400).send("Invalid Credentials");
        // }
    } catch (err) {
        console.log(err);
    }

};