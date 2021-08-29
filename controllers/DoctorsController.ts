import { Request, Response } from 'express';
import Doctor from '../Models/DoctorSchema';
class DoctorsController {
    async create(req: Request, res: Response) {
        let doctor = new Doctor(req.body);

        try {
            await doctor.save();    
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to save');
        }
    }

    async index(req: Request, res: Response) {
        let name = String(req.query.name);
        let stars = Number(req.query.stars);
        let maxPrice = Number(req.query.maxPrice);
        let specialities = req.query.speciality ? String(req.query.speciality).split(',') : [];
        
        try {
            let data = [];
            let query = {};

            if(name && name != 'undefined') {
                let nameRegex = new RegExp(name, 'gi');              
                query['$or'] = [{ name: nameRegex}, { last_name: nameRegex}];
            } 

            if(stars)
                query['stars'] = stars;
            
                if(specialities.length)
                query['speciality'] = { '$in': specialities }
            
            if(maxPrice)
                query['price'] = { '$lte': maxPrice };
            
            console.log(query);

            data = await Doctor.find(query);
            
            return res.json(data);
        } catch (error) {
            return res.status(400).send('Failed to find');   
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            let doctors = await Doctor.findOne({ _id: id });
            return res.json(doctors);
        } catch (error) {
            console.log(error);
            return res.status(400).send('Failed to find doctor');
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Doctor.updateOne({ _id: id }, req.body);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to update doctor');
        }
    }

    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Doctor.deleteOne({ _id: id });
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send('Failed to remove doctor');
        }
    }
};

export default DoctorsController;