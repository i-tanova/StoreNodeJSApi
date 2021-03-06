const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add store ID'], 
        unique: true, 
        trim: true,
        maxlength: [10, 'Store ID must be less than 10 chars']
    },
    address: {
        type: String,
        required: [true, 'Please provide an address']
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
      }, 
      formattedAddress: String,
      createdAt: {
          type: Date,
          default: Date.now
      }
});

// Geocode & create location
StoreSchema.pre('save', async function(next){
  cons loc = await geocoder.geocode(this.address);
})
module.exports = mongoose.model('Store', StoreSchema);