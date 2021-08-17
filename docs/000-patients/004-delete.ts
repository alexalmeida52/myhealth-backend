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