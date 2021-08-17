/**
 *  @swagger
 *  
 *  /timetable/{id}:
 *    delete:
 *      summary: Remove a timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Timetable id.
 *          type: string
 *      responses:
 *        204:
 *          description: No content.
*/