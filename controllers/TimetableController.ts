import { Request, Response } from 'express';
import Timetable from '../Models/TimetableSchema';

class TimetableController {
    async create(req: Request, res: Response) {
        let timetable = new Timetable(req.body);

        try {
            await timetable.save();    
            return res.status(204).send();
        } catch (error) {
            console.log(error)
            return res.status(400).send('Failed to save');
        }
    }

    async index(req: Request, res: Response) {
        try {
            let data = await Timetable.find({});
            return res.json(data);
        } catch (error) {
            return res.status(400).send('Failed to find');   
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            let timetable = await Timetable.findOne({ _id: id });
            return res.json(timetable);
        } catch (error) {
            console.log(error);
            return res.status(400).send('Failed to find timetable');
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Timetable.updateOne({ _id: id }, req.body);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to update timetable');
        }
    }

    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Timetable.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to remove timetable');
        }
    }
};

export default TimetableController;