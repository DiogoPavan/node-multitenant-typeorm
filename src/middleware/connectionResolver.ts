import { Request, Response, NextFunction } from 'express';
import Tenant from '../models/models-master/Tenant';

import Cache from '../utils/Cache';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { host } = req.headers;
  const tenantSlug = host && host.split('.')[0];

  const cached = await Cache.get(`tenant:${tenantSlug}`);

  if (!cached) {
    const tenant = await Tenant.findOne({ tenantSlug });

    if (!tenant) {
      return res.json({ message: `Tenant não existe na base` });
    }

    await Cache.set(`tenant:${tenantSlug}`, tenant);
  }

  req.tenantSlug = tenantSlug || '';

  next();
};
