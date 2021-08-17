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