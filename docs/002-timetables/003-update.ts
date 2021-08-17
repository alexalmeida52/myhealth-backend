/**
 *  @swagger
 *  
 *  /timetable/{id}:
 *    put:
 *      summary: Update a timetable.
 *      tags:
 *      - Timetable
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Timetable id
 *          type: string
 *          example: "6119bd1b8d5ba50692f751f2"
 *        - in: body
 *          name: timetable
 *          description: The timetable to create.
 *          schema:
 *            type: object
 *            properties:
 *              start_date:
 *                description: Timetable start date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-10-10 08:00"
 *              end_date:
 *                description: Timetable end date in ISO 8601 format (YYYY-MM-DD HH:mm).
 *                type: string
 *                example: "2021-12-10 08:00"
 *              day_of_week: 
 *                description: Day of week. For example, 0 (sunday), 1 (monday), 2 (Tuesday), ...
 *                type: string
 *                enum: ["0", "1", "2", "3", "4", "5", "6"]
 *                example: "3"
 *              duration:
 *                description: Scheduling duration in minutes.
 *                type: number
 *                example: 30
 *              limit: 
 *                description: Schedulings limit of the timetable.
 *                type: number
 *                example: 10
 *              doctor_id:
 *                description: Doctor id.
 *                type: string
 *                example: "6114778fa75b6930362bd30a"
 *              type:
 *                description: 1 for scheduled time and 2 for order of arrival.
 *                type: string
 *                enum: ["1", "2"]
 *      responses:
 *        204:
 *          description: No content.
*/