const express = require('express');

const app = express();
const PORT = 9000;

//Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GroceryGUI!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
