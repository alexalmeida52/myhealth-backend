import express from 'express';

const routes = express.Router();

import DoctorsController from './controllers/DoctorsController';
import SchedulingController from './controllers/SchedulingController';

const doctorsController = new DoctorsController();
const schedulingController = new SchedulingController();

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
 *  /schedulings:
 *    post:
 *      summary: Create new scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Scheduling date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              patient_id:
 *                description: Patient id.
 *                type: string
 *                example: "6114778fa75b6930362bd30a"
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *                example: "6114778fa75b6930362bd30a"
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
 *      summary: Retorna todos os agendamentos
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: query
 *          name: disponiveis
 *          description: Retornar apenas agendamentos disponíveis.
 *          type: string
 *      responses:
 *        200:
 *          description: Array com os agendamentos
*/
routes.get('/schedulings', schedulingController.index);

/**
 *  @swagger
 *  
 *  /schedulings/:id:
 *    get:
 *      summary: Retorna um agendamento.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do agendamento
 *          type: string
 *      responses:
 *        200:
 *          description: Retornar um agendamento
*/
routes.get('/schedulings/:id', schedulingController.show);

/**
 *  @swagger
 *  
 *  /schedulings/:id:
 *    put:
 *      summary: Atualiza um agendamento.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do agendamento
 *          type: string
 *        - in: body
 *          schema:
 *            type: object
 *            properties:
 *              nome:
 *                description: Nome do profissional.
 *                type: string
 *              sobrenome:
 *                description: Sobrenome do profissional.
 *                type: string
 *              sexo:
 *                description: Gênero do profissional. Aceita somente 'M' ou 'F'.
 *                type: string
 *              especialidade:
 *                description: Especialidade do profissional.
 *                type: string
 *              clinica:
 *                description: Identificador da clínica que o profissional atende.
 *                type: string
 *              dataNascimento:
 *                description: Data de nascimento em formato ISO 8601 (YYYY-MM-DD).
 *                type: string
 *      responses:
 *        204:
 *          description: Não possui retorno no body.
*/
routes.put('/schedulings/:id', schedulingController.update);


/**
 *  @swagger
 *  
 *  /schedulings/:id:
 *    delete:
 *      summary: Remove um agendamento.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do agendamento no sistema da clínica
 *          type: integer
 *      responses:
 *        204:
 *          description: Não possui retorno no body.
*/
routes.delete('/schedulings/:id', schedulingController.remove);

export default routes;