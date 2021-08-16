const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Timetable = mongoose.model('Timetables', {
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  doctor_id: { 
    type: Schema.Types.ObjectId,
    ref: 'Doctors',
    required: true,
  },
  day_of_week: { type: String, enum: ['0', '1', '2', '3', '4', '5', '6'], required: true },
  type: { type: String, default: '1', enum: ['1', '2'] },
  duration: { type: Number },
  limit: { type: Number },
  created_at: { type: Date, default: Date.now }
});

export default Timetable;
