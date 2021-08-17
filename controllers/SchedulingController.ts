import { Request, Response } from 'express';
import Scheduling from '../Models/SchedulingSchema';

class SchedulingController {
    async create(req: Request, res: Response) {
        let scheduling = new Scheduling(req.body);

        try {
            await scheduling.save();    
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to save');
        }
    }

    async index(req: Request, res: Response) {
        try {
            let data = await Scheduling.find({});
            return res.json(data);
        } catch (error) {
            return res.status(400).send('Failed to find');   
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            let schedulings = await Scheduling.findOne({ _id: id });
            return res.json(schedulings);
        } catch (error) {
            console.log(error);
            return res.status(400).send('Failed to find scheduling');
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Scheduling.updateOne({ _id: id }, req.body);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to update scheduling');
        }
    }

    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Scheduling.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to remove scheduling');
        }
    }
};

export default SchedulingController;