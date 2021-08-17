
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