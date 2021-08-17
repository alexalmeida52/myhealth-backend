import { Request, Response } from 'express';
import moment from 'moment';

import Timetable from '../Models/TimetableSchema';
import Scheduling from '../Models/SchedulingSchema';

class DoctorAvailabilityController {
    async index(req: Request, res: Response) {
        const { id } = req.params;

        try {
            let timetable = await Timetable.find({ doctor_id: id });
            
            let timeAvailable = [];
            
            for(let time of timetable) {
                let schedulings = await Scheduling.find({ timetable_id:  time._id });

                let startDate = moment(time.start_date);
                let endDate = moment(time.end_date);
                
                while(startDate.isBefore(endDate)) {
                    let schedulingAllowed = true;
                    for(let i = 0; i < schedulings.length; i++) {
                        if(moment(schedulings[i].start_date).isSame(startDate)){
                            schedulingAllowed = false;
                            break;
                        }
                    };

                    if(schedulingAllowed) {
                        timeAvailable.push(startDate.format("YYYY-MM-DD HH:mm"));
                    }
                    startDate = startDate.add(time.duration, 'minutes');
                }
                
            };
            return res.json(timeAvailable);
        } catch (error) {
            return res.status(400).send('Failed to save');
        }
    }
};

export default DoctorAvailabilityController;