const mongoose = require('mongoose');
const Music_Portfolio_Plan = mongoose.model('Music_Portfolio_Plan');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    Music_Portfolio_Plan.find()
      .then((music_portfolio_plans) => {
        response.json({ music_portfolio_plans: music_portfolio_plans });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Music_Portfolio_Plan.findById(request.params.id)
      .then((music_portfolio_plan) => {
        response.json({ music_portfolio_plan: music_portfolio_plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Music_Portfolio_Plan.create(request.body)
      .then((newMusic_Portfolio_Plan) => {
        response.json({ music_portfolio_plan: newMusic_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Music_Portfolio_Plan.findByIdAndDelete(request.params.id)
      .then((deletedMusic_Portfolio_Plan) => {
        response.json({ music_portfolio_plan: deletedMusic_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Music_Portfolio_Plan.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedMusic_Portfolio_Plan) => {
        response.json({ music_portfolio_plan: updatedMusic_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}