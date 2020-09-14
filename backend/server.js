const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;

//Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GroceryGUI!" });
});

const groceryRoutes = require('./app/routes/grocery.list.routes.js');

//Lists api
app.use('./api/lists', groceryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
