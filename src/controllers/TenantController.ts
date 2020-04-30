import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Tenant from '../models/models-master/Tenant';

class TenantController {
  async insert(req: Request, res: Response) {
    const tenantExists = await Tenant.findOne({
      tenantSlug: req.body.tenantSlug,
    });

    if (tenantExists) {
      return res.status(400).json({ error: 'Tenant já existe' });
    }

    const tenant = await Tenant.save(req.body);

    return res.json(tenant);
  }

  async findAll(req: Request, res: Response) {
    const tenants = await Tenant.find();

    return res.json(tenants);
  }
}

export default new TenantController();
