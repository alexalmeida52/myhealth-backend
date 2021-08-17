/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    delete:
 *      summary: Remove a scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Scheduling id.
 *          type: string
 *      responses:
 *        204:
 *          description: No content.
*/