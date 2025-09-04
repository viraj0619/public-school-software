const socialInfo = require('../../routes/user_routes'); // assuming you have a db module that has a query function

module.exports = {
  social_info: async function() {
    const result = await db.query('select * from social_links');
    return result;
  }
};