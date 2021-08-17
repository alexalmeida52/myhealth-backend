/**
 *  @swagger
 *  
 *  /doctor-availability/{id}:
 *    get:
 *      summary: Return all available times of the doctor.
 *      tags:
 *      - Doctor Availability
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Doctor id
 *          example: "6115439f804327043f72925c"
 *      responses:
 *        200:
 *          description: Array of times.
*/