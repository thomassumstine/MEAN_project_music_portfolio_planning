const music_portfolio_plansController = require('../controllers/music_portfolio_plans');

module.exports = function (app) {
  app.get('/api/music_portfolio_plans', music_portfolio_plansController.all);
  app.get('/api/music_portfolio_plans/:id', music_portfolio_plansController.getOne);
  app.post('/api/music_portfolio_plans', music_portfolio_plansController.create);
  app.delete('/api/music_portfolio_plans/:id', music_portfolio_plansController.delete);
  app.put('/api/music_portfolio_plans/:id', music_portfolio_plansController.update);
}