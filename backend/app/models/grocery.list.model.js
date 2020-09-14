var dbConnection = require('./index.js');
const util = require('util');

var GroceryList = function(groceries) {
  this.title = GroceryList.title;
  this.sections = GroceryList.sections;
  this.color = GroceryList.color;
  this.created_at = new Date();
  this.updated_at = new Date();
};

GroceryList.create = async function(groceries, result) {
  //Allows the querys to be asynchronous
  const query = util.promisify(dbConnection.query).bind(dbConnection);
  const newList = {
    title: groceries.title,
    color: groceries.color,
    created_at: groceries.created_at
  };

  try {
    await query("INSERT INTO lists SET ?", newList);

    var id = await query("SELECT MAX(id) from lists");
    id = id[0].id;
    var sections = [];
    for (let i = 0; i < groceries.sections.length; i++){
      sections.push([groceries.sections[i], id]);
    }
    await query("INSERT INTO sections VALUES ?", [sections]);
    result(null, id);
  }
  catch(err) {
    result(err, null);
  }
}
