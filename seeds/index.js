const seedUsers = require('./user-seeds');
/* const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds'); */

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('user seeded');


  process.exit(0);
};

seedAll();