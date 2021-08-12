import { Request, Response } from 'express';

class SchedulingController {
    async create(req: Request, res: Response) {

        return res.status(204).send();
    }

    async index(req: Request, res: Response) {

        return res.json([]);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        /* const item = await knex('items').where('id', id).select('*');

        if(!item) return res.status(400).json({ message: "Item not found"});
         */

        return res.json({});
    }

    async update(req: Request, res: Response) {
        return res.status(204).send();
    }

    async remove(req: Request, res: Response) {
        return res.status(204).send();
    }
};

export default SchedulingController;