/**
 *  @swagger
 *  
 *  /schedulings/{id}:
 *    put:
 *      summary: Update scheduling.
 *      tags:
 *      - Scheduling
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Scheduling id
 *          type: string
 *        - in: body
 *          name: scheduling
 *          description: The scheduling to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Scheduling start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              patient_id:
 *                description: Patient id.
 *                type: string
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *              timetable_id:
 *                description: Timetable id.
 *                type: string
 *      responses:
 *        204:
 *          description: No content.
*/