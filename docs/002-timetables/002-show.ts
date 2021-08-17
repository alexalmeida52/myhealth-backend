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