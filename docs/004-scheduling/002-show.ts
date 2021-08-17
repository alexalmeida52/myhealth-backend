
/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    get:
 *      summary: Return an object Scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *          type: string
 *          required: true
 *          description: Scheduling id
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        200:
 *          description: Object Scheduling
*/