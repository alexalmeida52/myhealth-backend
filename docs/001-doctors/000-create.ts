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