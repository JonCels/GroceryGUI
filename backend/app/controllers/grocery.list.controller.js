const GroceryList = require('../models/grocery.list.model.js');

exports.create = function(req, res) {
  if (!req.body.title || !req.body.sections) {
    res.status(400).send({
      message: 'Field(s) cannot be empty!'
    });
    return;
  }

  const new_grocery_list = new GroceryList(req.body);
  GroceryList.create(new_grocery_list, function(err, grocery_list) {
    if (err) {
      res.send(err);
    }
    res.json({ error: false, message: "New list added successfully", data: grocery_list});
  });
};
