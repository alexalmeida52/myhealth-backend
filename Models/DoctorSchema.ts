const mongoose = require('mongoose');

const Doctor = mongoose.model('Doctors', {
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  speciality: { type: String, required: true },
  gender: { type: String, required: true, enum: ['M', 'F'] },
  birthday: { type: Date, required: true },
});

export default Doctor;
