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
 *      summary: Cria um novo médico.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
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
 *        201:
 *          description: Não possui retorno no body.
*/
routes.post('/doctors', doctorsController.create);

/**
 *  @swagger
 *  
 *  /doctors:
 *    get:
 *      summary: Retorna todos os médicos
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
 *  /doctors/:id:
 *    get:
 *      summary: Retorna um médico.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do médico
 *          type: string
 *      responses:
 *        200:
 *          description: Retornar um médico
*/
routes.get('/doctors/:id', doctorsController.show);

/**
 *  @swagger
 *  
 *  /doctors/:id:
 *    put:
 *      summary: Atualiza um médico.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do médico
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
routes.put('/doctors/:id', doctorsController.update);


/**
 *  @swagger
 *  
 *  /doctors/:id:
 *    delete:
 *      summary: Remove um médico.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Id do médico no sistema da clínica
 *          type: integer
 *      responses:
 *        204:
 *          description: Não possui retorno no body.
*/
routes.delete('/doctors/:id', doctorsController.remove);


/**
 *  @swagger
 *  
 *  /schedulings:
 *    post:
 *      summary: Cria um novo agendamento.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
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
 *        201:
 *          description: Não possui retorno no body.
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