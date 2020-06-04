import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/* Patterns of controller methods
    index: list all items
    show: list an item
    create: create an item
    update: update an item
    delete: delete an item
*/
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;