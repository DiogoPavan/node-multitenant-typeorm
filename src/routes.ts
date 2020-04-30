import { Router } from 'express';
import TenantController from './controllers/TenantController';
import UserController from './controllers/UserController';
import CityController from './controllers/CityController';

import connectionResolver from './middleware/connectionResolver';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ body: 'Hello multi-tenant.' });
});

routes.post('/tenant', TenantController.insert);
routes.get('/tenant/findall', TenantController.findAll);

routes.use(connectionResolver);

routes.get('/user', UserController.findAll);
routes.post('/user', UserController.insert);

routes.get('/city', CityController.findAll);
routes.post('/city', CityController.insert);

export default routes;
