const Store = require('../models/Store')

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async(req, res, next) => {
    try {
        const stores = await Store.find();
        res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Server error"});
    }
}

// @desc Add a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async(req, res, next) => {
    try {
        console.log(req.body);
        const store = await Store.create(req.body);

        res.status(200).json({
            success: true,
            data: store
        });
    } catch (error) {
        console.error(error);
        if(error.code === 11000){
            res.status(400).json({error: "Store id already exists"});
        }else{
        res.status(500).json({error: "Server error"});
        }
    }
}