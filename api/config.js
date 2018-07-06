const path = require('path');

const rootPath = __dirname;

const name = 'garnet';

const testName = 'garnet-test';

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: process.env.NODE_ENV === 'test' ? testName : name
  }
};

