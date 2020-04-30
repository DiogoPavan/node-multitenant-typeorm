import { getConnection, createConnections, ConnectionOptions } from 'typeorm';

import Tenant from '../models/models-master/Tenant';

export const connectAllDb = async () => {
  try {
    let connection = getConnection('default');

    if (connection.isConnected == false) {
      await connection.connect();
    }
    const tenants = await Tenant.find();

    const connectionMap = tenants.map(tenant => {
      const c: ConnectionOptions = {
        name: tenant.tenantSlug,
        type: 'postgres',
        host: tenant.dbHost,
        port: tenant.dbPort,
        username: tenant.dbUsername,
        password: tenant.dbPassword,
        database: tenant.dbName,
        entities: ['src/models/models-db/*.ts'],
        synchronize: true,
      };

      return c;
    });

    await createConnections(connectionMap);
    return;
  } catch (e) {
    console.log('error', e);
    return;
  }
};
