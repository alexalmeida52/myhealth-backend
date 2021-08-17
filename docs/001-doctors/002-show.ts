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