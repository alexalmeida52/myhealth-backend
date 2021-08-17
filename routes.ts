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
 *  @swagger
 *  
 *  /patients:
 *    post:
 *      summary: Create a new patient.
 *      tags:
 *      - Patients
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: patient
 *          description: The patient to create.
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: Patient name.
 *                type: string
 *                example: "Fabricio"
 *              last_name:
 *                description: Patient last name.
 *                type: string
 *                example: "Cruz da Silva"
 *              gender:
 *                description: Patient gender. Accept only 'M' or 'F'.
 *                enum: [M, F]
 *                type: string
 *              email:
 *                description: Patient email.
 *                type: string
 *                example: "fabricio@myhealth.com.br"
 *              password:
 *                description: Patient password.
 *                type: string
 *                example: "12345"
 *              phone:
 *                description: Patient phone.
 *                type: string
 *                example: "84988649373"
 *              birthday:
 *                description: Date of birth in ISO 8601 format (YYYY-MM-DD).
 *                type: string
 *                example: "1996-12-23"
 *      responses:
 *        201:
 *          description: No content.
*/
routes.post('/patients', patientsController.create);

/**
 *  @swagger
 *  
 *  /patients:
 *    get:
 *      summary: Return a list of patients
 *      tags:
 *      - Patients
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Returns an array of patient objects
*/
routes.get('/patients', patientsController.index);

/**
 *  @swagger
 *  
 *  /patients/{id}:
 *    get:
 *      summary: Return an object Patient.
 *      tags:
 *      - Patients
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Patient id
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        200:
 *          description: Object Patient
*/
routes.get('/patients/:id', patientsController.show);

/**
 *  @swagger
 *  
 *  /patients/{id}:
 *    put:
 *      summary: Update doctor.
 *      tags:
 *      - Patients
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Patient id
 *          type: string
 *          example: "6114778fa75b6930362bd30a"
 *        - in: body
 *          name: patient
 *          description: The patient to create.
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: First name.
 *                type: string
 *                example: "Bruno Wagner"
 *              last_name:
 *                description: Last name.
 *                type: string
 *                example: "Rodrigues"
 *              gender:
 *                description: Patient gender. Accept only 'M' or 'F'.
 *                type: string
 *                example: "M"
 *              email:
 *                description: Patient email.
 *                type: string
 *                example: "brunowagner@gmail.com"
 *              password:
 *                description: Patient password.
 *                type: string
 *                example: "myHealth"
 *              phone:
 *                description: Patient phone.
 *                type: string
 *                example: "84988321244"
 *              birthday:
 *                description: Date of birth in ISO 8601 format (YYYY-MM-DD).
 *                type: string
 *                example: "1992-10-22"
 *      responses:
 *        204:
 *          description: No content.
*/
routes.put('/patients/:id', patientsController.update);


/**
 *  @swagger
 *  
 *  /patients/{id}:
 *    delete:
 *      summary: Remove a patient.
 *      tags:
 *      - Patients
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Patient id
 *          type: string
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        204:
 *          description: No content.
*/
routes.delete('/patients/:id', patientsController.remove);

/**
 *  @swagger
 *  
 *  /doctors:
 *    post:
 *      summary: Create a new doctor.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: doctor
 *          description: The doctor to create.
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: Profissional name.
 *                type: string
 *                example: "Alex"
 *              last_name:
 *                description: Profissional last name.
 *                type: string
 *                example: "Alves"
 *              gender:
 *                description: Professional gender. Accept only 'M' or 'F'.
 *                enum: [M, F]
 *                type: string
 *              speciality:
 *                description: Professional speciality.
 *                type: string
 *                example: "Cardiologia"
 *              clinic:
 *                description: Professional's clinic.
 *                type: string
 *                example: "myHealth"
 *              birthday:
 *                description: Date of birth in ISO 8601 format (YYYY-MM-DD).
 *                type: string
 *                example: "1996-10-10"
 *      responses:
 *        201:
 *          description: No content.
*/
routes.post('/doctors', doctorsController.create);

/**
 *  @swagger
 *  
 *  /doctors:
 *    get:
 *      summary: Returns an array of doctor objects
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: query
 *          name: disponiveis
 *          description: Retornar apenas médicos disponíveis.
 *          type: string
 *      responses:
 *        200:
 *          description: Array com os médicos
*/
routes.get('/doctors', doctorsController.index);

/**
 *  @swagger
 *  
 *  /doctors/{id}:
 *    get:
 *      summary: Return an object Doctor.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Doctor id
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        200:
 *          description: Object Doctor
*/
routes.get('/doctors/:id', doctorsController.show);

/**
 *  @swagger
 *  
 *  /doctors/{id}:
 *    put:
 *      summary: Update doctor.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Doctor id
 *          type: string
 *          example: "6114778fa75b6930362bd30a"
 *        - in: body
 *          name: doctor
 *          description: The doctor to create.
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: First name.
 *                type: string
 *                example: "José Alex"
 *              last_name:
 *                description: Last name.
 *                type: string
 *                example: "Pereira"
 *              gender:
 *                description: Professional gender. Accept only 'M' or 'F'.
 *                type: string
 *                example: "M"
 *              speciality:
 *                description: Professional speciality.
 *                type: string
 *                example: "Fisioterapia"
 *              clinic:
 *                description: Professional's clinic.
 *                type: string
 *                example: "myHealth"
 *              birthday:
 *                description: Date of birth in ISO 8601 format (YYYY-MM-DD).
 *                type: string
 *                example: "1992-10-22"
 *      responses:
 *        204:
 *          description: No content.
*/
routes.put('/doctors/:id', doctorsController.update);


/**
 *  @swagger
 *  
 *  /doctors/{id}:
 *    delete:
 *      summary: Remove a doctor.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Doctor id
 *          type: string
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        204:
 *          description: No content.
*/
routes.delete('/doctors/:id', doctorsController.remove);

/**
 *  @swagger
 *  
 *  /timetable:
 *    post:
 *      summary: Create new timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: timetable
 *          description: The timetable to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Timetable start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              end_date:
 *                description: Timetable end date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-12-10 08:00"
 *              day_of_week: 
 *                description: Day of week. For example, 0 (sunday), 1 (monday), 2 (Tuesday), ...
 *                type: string
 *                enum: ["0", "1", "2", "3", "4", "5", "6"]
 *                example: "3"
 *              duration:
 *                description: Scheduling duration in minutes.
 *                type: number
 *                example: 30
 *              limit: 
 *                description: Schedulings limit of the timetable.
 *                type: number
 *                example: 10
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *                example: "6114778fa75b6930362bd30a"
 *              type:
 *                description: 1 for scheduled time and 2 for order of arrival.
 *                type: string
 *                enum: ["1", "2"]
 *      responses:
 *        201:
 *          description: Created.
*/
routes.post('/timetable', timetableController.create);

/**
 *  @swagger
 *  
 *  /timetable:
 *    get:
 *      summary: Return all timetable
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Array of timetable.
*/
routes.get('/timetable', timetableController.index);

/**
 *  @swagger
 *  
 *  /timetable/{id}:
 *    get:
 *      summary: Return an object Timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Timetable id
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        200:
 *          description: Object Timetable
*/
routes.get('/timetable/:id', timetableController.show);

/**
 *  @swagger
 *  
 *  /timetable/{id}:
 *    put:
 *      summary: Update a timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Timetable id
 *          type: string
 *          example: "6119bd1b8d5ba50692f751f2"
 *        - in: body
 *          name: timetable
 *          description: The timetable to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Timetable start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              end_date:
 *                description: Timetable end date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-12-10 08:00"
 *              day_of_week: 
 *                description: Day of week. For example, 0 (sunday), 1 (monday), 2 (Tuesday), ...
 *                type: string
 *                enum: ["0", "1", "2", "3", "4", "5", "6"]
 *                example: "3"
 *              duration:
 *                description: Scheduling duration in minutes.
 *                type: number
 *                example: 30
 *              limit: 
 *                description: Schedulings limit of the timetable.
 *                type: number
 *                example: 10
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *                example: "6114778fa75b6930362bd30a"
 *              type:
 *                description: 1 for scheduled time and 2 for order of arrival.
 *                type: string
 *                enum: ["1", "2"]
 *      responses:
 *        204:
 *          description: No content.
*/
routes.put('/timetable/:id', timetableController.update);


/**
 *  @swagger
 *  
 *  /timetable/{id}:
 *    delete:
 *      summary: Remove a timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Timetable id.
 *          type: string
 *      responses:
 *        204:
 *          description: No content.
*/
routes.delete('/timetable/:id', timetableController.remove);

/**
 *  @swagger
 *  
 *  /schedulings:
 *    post:
 *      summary: Create a new scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: scheduling
 *          description: The scheduling to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Scheduling start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              patient_id:
 *                description: Patient id.
 *                type: string
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *              timetable_id:
 *                description: Timetable id.
 *                type: string
 *      responses:
 *        201:
 *          description: No content.
*/
routes.post('/schedulings', schedulingController.create);


/**
 *  @swagger
 *  
 *  /schedulings:
 *    get:
 *      summary: Return all schedulings
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      responses:
 *        200:
 *          description: Array of schedulings.
*/
routes.get('/schedulings', schedulingController.index);


/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    get:
 *      summary: Return an object Scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Scheduling id
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        200:
 *          description: Object Scheduling
*/
routes.get('/schedulings/:id', schedulingController.show);


/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    put:
 *      summary: Update scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Scheduling id
 *          type: string
 *        - in: body
 *          name: scheduling
 *          description: The scheduling to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Scheduling start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              patient_id:
 *                description: Patient id.
 *                type: string
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *              timetable_id:
 *                description: Timetable id.
 *                type: string
 *      responses:
 *        204:
 *          description: No content.
*/
routes.put('/schedulings/:id', schedulingController.update);

/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    delete:
 *      summary: Remove a scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Scheduling id.
 *          type: string
 *      responses:
 *        204:
 *          description: No content.
*/
routes.delete('/schedulings/:id', schedulingController.remove);

export default routes;