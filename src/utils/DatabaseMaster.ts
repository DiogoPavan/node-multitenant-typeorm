import 'dotenv/config';
import { createConnection } from 'typeorm';

class DatabaseMaster {
  constructor() {
    this.init();
  }

  async init() {
    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST_MASTER,
      port: 5432,
      username: process.env.DB_USER_MASTER,
      password: process.env.DB_PASSWORD_MASTER,
      database: process.env.DB_NAME_MASTER,
      entities: ['src/models/models-master/*.ts'],
    });

    await connection.synchronize();
  }
}

export default new DatabaseMaster();
