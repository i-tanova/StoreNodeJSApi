const Store = require('../models/Store')

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async(req, res, next) => {
    try {
        const stores = await Store.find();
    } catch (error) {
        console.exception(error);
    }
}