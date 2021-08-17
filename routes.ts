import express from 'express';

const routes = express.Router();

import DoctorsController from './controllers/DoctorsController';
import PatientsController from './controllers/PatientsController';
import SchedulingController from './controllers/SchedulingController';
import TimetableController from './controllers/TimetableController';

const doctorsController = new DoctorsController();
const patientsController = new PatientsController();
const schedulingController = new SchedulingController();
const timetableController = new TimetableController();

/**
 * PATIENTS ENTPOINTS
 */
routes.post('/patients', patientsController.create);
routes.get('/patients', patientsController.index);
routes.get('/patients/:id', patientsController.show);
routes.put('/patients/:id', patientsController.update);
routes.delete('/patients/:id', patientsController.remove);

/**
 * DOCTORS ENDPOINTS
 */
routes.post('/doctors', doctorsController.create);
routes.get('/doctors', doctorsController.index);
routes.get('/doctors/:id', doctorsController.show);
routes.put('/doctors/:id', doctorsController.update);
routes.delete('/doctors/:id', doctorsController.remove);

/**
 * TIMETABLE ENDPOINTS
 */
routes.post('/timetable', timetableController.create);
routes.get('/timetable', timetableController.index);
routes.get('/timetable/:id', timetableController.show);
routes.put('/timetable/:id', timetableController.update);
routes.delete('/timetable/:id', timetableController.remove);

/**
 * SCHEDULINGS
 */
routes.post('/schedulings', schedulingController.create);
routes.get('/schedulings', schedulingController.index);
routes.get('/schedulings/:id', schedulingController.show);
routes.put('/schedulings/:id', schedulingController.update);
routes.delete('/schedulings/:id', schedulingController.remove);

export default routes;