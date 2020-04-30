import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import City from '../models/models-db/City';

export default {
  async insert(req: Request, res: Response) {
    const city = await getConnection(req.tenantSlug)
      .getRepository(City)
      .save(req.body);

    return res.json(city);
  },

  async findAll(req: Request, res: Response) {
    const cities = await getConnection(req.tenantSlug).manager.find(City);

    return res.json(cities);
  },
};
