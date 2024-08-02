const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  referenceNumber: { type: String },
  price: { type: Number, required: true },
  movement: { type: String },
  caseMaterial: { type: String },
  caseDiameter: { type: Number },
  caseThickness: { type: Number },
  dialColor: { type: String },
  crystal: { type: String },
  strapMaterial: { type: String },
  waterResistance: { type: Number },
  features: { type: [String] },
  yearOfManufacture: { type: Number },
  limitedEdition: { type: Boolean },
  serialNumber: { type: String },
  countryOfOrigin: { type: String },
  warranty: { type: String },
  images: { type: [String] },
  manuals: { type: [String] },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  dateAdded: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  addedBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Watch', WatchSchema);
