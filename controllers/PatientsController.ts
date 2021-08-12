import { Request, Response } from 'express';
import Patient from '../Models/PatientSchema';
class PatientsController {
    async create(req: Request, res: Response) {
        let patient = new Patient(req.body);

        try {
            await patient.save();    
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to save');
        }
    }

    async index(req: Request, res: Response) {
        try {
            let data = await Patient.find({});
            return res.json(data);
        } catch (error) {
            return res.status(400).send('Failed to find');   
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            let patients = await Patient.findOne({ _id: id });
            return res.json(patients);
        } catch (error) {
            console.log(error);
            return res.status(400).send('Failed to find patient');
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Patient.updateOne({ _id: id }, req.body);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to update patient');
        }
    }

    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Patient.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to remove patient');
        }
    }
};

export default PatientsController;