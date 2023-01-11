import Restaurants from '../models/Restaurants.js';
import Types from '../models/Types.js'

export const showAllRestaurants = async (req, res) => {
    try {
        const documents = await Restaurants.find({}).populate("type");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchRestaurantsByName = async (req, res) => {
    try {
        const { query } = req.params;
        const documents = await Restaurants.find({ nombre: new RegExp(query, 'i') })
            .populate({
                path: 'type',
                model: 'Types'
            });
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const getRestaurantByAp = async (req, res) => {
    try {
        const {query} = req.params;
        const documents = await Restaurants.find({ averagePrice: new RegExp(query, 'i')})

        res.json(documents);
    }catch (error) {
        console.log(error);
    }
}

export const searchRestaurantByType = async (req, res) => {
    try {
        const { query } = req.params;
        const documents = await Restaurants.find({ type:ObjectId(req.params.idType) })
                                .populate("type");
            
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};


export const showRestaurantById = async (req, res) => {
    const document = await Games.findById(req.params.idGame);
    if (!document) {
        res.json({ message: 'This restaurant doesn\'t exist' });
    }
    res.json(document);
};

export const newRestaurant = async (req, res) => {
    const document = new Restaurants(req.body);
    try {
        await document.save();
        res.json({ message: 'New resturant was added' });
    } catch (error) {
        res.send(error);
    }
};

export const updateRestaurant = async (req, res) => {
    try {
        const filter = { _id: req.body.id };
        const update = req.body;
        const options = { new: true };
        const document = await Games.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

export const deleteRestaurant = async (req, res) => {
    try {
        await Restaurants.findByIdAndDelete({ _id: req.params.idRestaurant });
        res.json({ message: 'The restaurant was deleted' + req.params.idRestaurant });
    } catch (error) {
        console.log(error);
    }
};