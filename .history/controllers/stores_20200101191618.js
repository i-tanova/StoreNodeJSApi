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
        console.exception(error);
        res.status(500).json({error: "Server error"});
    }
}

// @desc Add a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async(req, res, next) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.exception(error);
        res.status(500).json({error: "Server error"});
    }
}