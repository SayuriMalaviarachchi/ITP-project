const express = require('express');
const route = express.Router()


const contoller = require('../controller/controller');

// LAB TEST APIs
route.post('/api/v1/lab-tests/',contoller.labTest.create);
route.get('/api/v1/lab-tests/',contoller.labTest.find);
route.put('/api/v1/lab-tests/',contoller.labTest.update);
route.delete('/api/v1/lab-tests/:id',contoller.labTest.delete);

// Requested LAB TEST APIs
route.post('/api/v1/requested-lab-tests/',contoller.requestedLabTest.create);
route.get('/api/v1/requested-lab-tests/',contoller.requestedLabTest.find);
route.put('/api/v1/requested-lab-tests/',contoller.requestedLabTest.update);
route.delete('/api/v1/requested-lab-tests/',contoller.requestedLabTest.delete);

// LAB WORKER PROFILE APIs
route.post('/api/v1/laboratorian/',contoller.laboratorian.create);
route.get('/api/v1/laboratorian/',contoller.laboratorian.find);
route.put('/api/v1/laboratorian/',contoller.laboratorian.update);
route.delete('/api/v1/laboratorian/',contoller.laboratorian.delete);

module.exports =route;
