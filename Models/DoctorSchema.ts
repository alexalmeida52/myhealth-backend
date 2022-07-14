const mongoose = require('mongoose');

const Doctor = mongoose.model('Doctors', {
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar: { type: String, required: true },
  speciality: { type: String, required: true },
  gender: { type: String, required: true, enum: ['M', 'F'] },
  birthday: { type: Date, required: true },
  clinic: { type: String, required: true },
  price: { type: Number, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export default Doctor;
