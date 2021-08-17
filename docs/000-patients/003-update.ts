
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