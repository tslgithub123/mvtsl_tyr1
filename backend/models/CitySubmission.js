
const mongoose = require('mongoose');

const citySubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  ulbCode: String,
  timestamp: { type: Date, default: Date.now, get: formatTimestamp },
}, { toJSON: { getters: true }, id: false });

function formatTimestamp(timestamp) {
  return timestamp.toISOString().slice(0, 19).replace('T', ' ');
}

module.exports = mongoose.model('CitySubmission', citySubmissionSchema);

