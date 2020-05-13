import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
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

    await createConnection({
      name: tenant.tenantSlug,
      type: 'postgres',
      host: tenant.dbHost,
      port: tenant.dbPort,
      username: tenant.dbUsername,
      password: tenant.dbPassword,
      database: tenant.dbName,
      entities: ['src/models/models-db/*.ts'],
      synchronize: true,
    });

    return res.json(tenant);
  }

  async findAll(req: Request, res: Response) {
    const tenants = await Tenant.find();

    return res.json(tenants);
  }
}

export default new TenantController();
