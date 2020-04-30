import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../models/models-db/User';

export default {
  async insert(req: Request, res: Response) {
    const user = await getConnection(req.tenantSlug)
      .getRepository(User)
      .save(req.body);

    return res.json(user);
  },

  async findAll(req: Request, res: Response) {
    const users = await getConnection(req.tenantSlug).manager.find(User, {
      relations: ['city'],
    });

    return res.json(users);
  },
};
