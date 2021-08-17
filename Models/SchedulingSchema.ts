const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Scheduling = mongoose.model('Schedulings', {
  start_date: { type: Date, required: true },
  patient_id: { 
    type: Schema.Types.ObjectId,
    ref: 'Patients',
    required: true,
  },
  doctor_id: { 
    type: Schema.Types.ObjectId,
    ref: 'Doctors',
    required: true,
  },
  timetable_id: { 
    type: Schema.Types.ObjectId,
    ref: 'Timetable',
    required: true,
  },
  created_at: { type: Date, default: Date.now }
});

export default Scheduling;
