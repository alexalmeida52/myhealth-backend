const mongoose = require('mongoose');

const Patient = mongoose.model('Patients', {
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true, enum: ['M', 'F'] },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  birthday: { type: Date, required: true },
  avatarUrl: { type: String },
  created_at: { type: Date, default: Date.now }
});

export default Patient;
