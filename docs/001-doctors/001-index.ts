/**
 *  @swagger
 *  
 *  /doctors:
 *    get:
 *      summary: Returns an array of doctor objects
 *      tags:
 *      - Doctors
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: query
 *          name: disponiveis
 *          description: Retornar apenas médicos disponíveis.
 *          type: string
 *      responses:
 *        200:
 *          description: Array com os médicos
*/