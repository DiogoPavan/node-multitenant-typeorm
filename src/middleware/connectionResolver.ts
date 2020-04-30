import { Request, Response, NextFunction } from 'express';
import Tenant from '../models/models-master/Tenant';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { host } = req.headers;
  const tenantSlug = host && host.split('.')[0];
  const tenant = await Tenant.findOne({ tenantSlug });

  if (!tenant) {
    return res.json({ message: `Tenant não existe na base` });
  }

  req.tenantSlug = tenantSlug || '';

  next();
};
