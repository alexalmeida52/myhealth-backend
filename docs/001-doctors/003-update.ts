/**
 *  @swagger
 *  
 *  /doctors/{id}:
 *    put:
 *      summary: Update doctor.
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
 *        - in: body
 *          name: doctor
 *          description: The doctor to create.
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: First name.
 *                type: string
 *                example: "José Alex"
 *              last_name:
 *                description: Last name.
 *                type: string
 *                example: "Pereira"
 *              avatar:
 *                description: Avatar url.
 *                type: string
 *                example: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
 *              gender:
 *                description: Professional gender. Accept only 'M' or 'F'.
 *                type: string
 *                example: "M"
 *              speciality:
 *                description: Professional speciality.
 *                type: string
 *                example: "Fisioterapia"
 *              clinic:
 *                description: Professional's clinic.
 *                type: string
 *                example: "myHealth"
 *              birthday:
 *                description: Date of birth in ISO 8601 format (YYYY-MM-DD).
 *                type: string
 *                example: "1992-10-22"
 *              price:
 *                description: Scheduling price.
 *                type: string
 *                example: 244.90
 *      responses:
 *        204:
 *          description: No content.
*/