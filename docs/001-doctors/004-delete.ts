/**
 *  @swagger
 *  
 *  /doctors/{id}:
 *    delete:
 *      summary: Remove a doctor.
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Doctor id
 *          type: string
 *          example: "6114778fa75b6930362bd30a"
 *      responses:
 *        204:
 *          description: No content.
*/